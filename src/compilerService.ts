import * as vscode from "vscode";
import * as path from "path";
import * as cp from "child_process";

export class CompilerService {
  private outputChannel: vscode.OutputChannel;
  private currentProcess: cp.ChildProcess | null = null;
  private diagnostics: vscode.DiagnosticCollection;

  constructor(outputChannel: vscode.OutputChannel) {
    this.outputChannel = outputChannel;
    this.diagnostics =
      vscode.languages.createDiagnosticCollection("purebasic-compiler");
  }

  async compile(filePath: string, run: boolean): Promise<void> {
    const cfg = vscode.workspace.getConfiguration("purebasic");
    let compilerPath = cfg.get<string>("compilerPath", "");

    if (!compilerPath) {
      compilerPath = await this.detectCompiler();
      if (!compilerPath) {
        const result = await vscode.window.showErrorMessage(
          "PureBasic compiler not found. Please set purebasic.compilerPath in Settings.",
          "Open Settings",
        );
        if (result === "Open Settings") {
          vscode.commands.executeCommand(
            "workbench.action.openSettings",
            "purebasic.compilerPath",
          );
        }
        return;
      }
    }

    const extraArgs = cfg.get<string[]>("compilerArgs", []);
    const outputFile = this.getOutputPath(filePath);
    const args: string[] = [filePath, "--exe", outputFile, ...extraArgs];
    if (run) {
      args.push("--run");
    }

    this.outputChannel.clear();
    this.outputChannel.show(true);
    this.outputChannel.appendLine(`▶ Compiling: ${path.basename(filePath)}`);
    this.outputChannel.appendLine(`  ${compilerPath} ${args.join(" ")}`);
    this.outputChannel.appendLine("");

    // Kill any previous compilation
    if (this.currentProcess) {
      this.currentProcess.kill();
      this.currentProcess = null;
    }

    await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: `PureBasic: ${run ? "Compiling & Running" : "Compiling"} ${path.basename(filePath)}`,
        cancellable: true,
      },
      async (_progress, token) => {
        return new Promise<void>((resolve) => {
          this.currentProcess = cp.spawn(compilerPath, args, {
            cwd: path.dirname(filePath),
          });

          token.onCancellationRequested(() => {
            this.currentProcess?.kill();
            this.outputChannel.appendLine("\n⛔ Compilation cancelled.");
            resolve();
          });

          const diags = new Map<string, vscode.Diagnostic[]>();

          this.currentProcess.stdout?.on("data", (data: Buffer) => {
            const text = data.toString();
            this.outputChannel.append(text);
            this.parseCompilerOutput(text, diags, filePath);
          });

          this.currentProcess.stderr?.on("data", (data: Buffer) => {
            const text = data.toString();
            this.outputChannel.append(text);
            this.parseCompilerOutput(text, diags, filePath);
          });

          this.currentProcess.on("close", (code) => {
            this.currentProcess = null;
            this.diagnostics.clear();

            for (const [file, fileDiags] of diags) {
              const uri = vscode.Uri.file(file);
              this.diagnostics.set(uri, fileDiags);
            }

            if (code === 0) {
              this.outputChannel.appendLine(
                `\n✅ Compilation successful → ${outputFile}`,
              );
              vscode.window.setStatusBarMessage(
                "PureBasic: Compiled successfully ✅",
                5000,
              );
            } else {
              this.outputChannel.appendLine(
                `\n❌ Compilation failed (exit code ${code})`,
              );
              vscode.window.setStatusBarMessage(
                "PureBasic: Compilation failed ❌",
                5000,
              );
            }
            resolve();
          });

          this.currentProcess.on("error", (err) => {
            this.outputChannel.appendLine(
              `\n❌ Compiler error: ${err.message}`,
            );
            vscode.window.showErrorMessage(
              `PureBasic compiler error: ${err.message}`,
            );
            resolve();
          });
        });
      },
    );
  }

  private parseCompilerOutput(
    text: string,
    diags: Map<string, vscode.Diagnostic[]>,
    defaultFile: string,
  ): void {
    // PureBasic compiler error format:
    // Error: <file> Line <n> - <message>
    // or: Line <n> - <message>  (for the current file)
    const patterns = [
      /Error:\s*(.+?)\s+Line\s+(\d+)\s*-\s*(.+)/gi,
      /^Line\s+(\d+)\s*-\s*(.+)/gim,
    ];

    let m: RegExpExecArray | null;

    const p1 = /Error:\s*(.+?)\s+Line\s+(\d+)\s*-\s*(.+)/gi;
    while ((m = p1.exec(text)) !== null) {
      const file = m[1].trim();
      const line = parseInt(m[2]) - 1;
      const message = m[3].trim();
      this.addDiag(diags, file, line, message);
    }

    const p2 = /^Line\s+(\d+)\s*-\s*(.+)/gim;
    while ((m = p2.exec(text)) !== null) {
      const line = parseInt(m[1]) - 1;
      const message = m[2].trim();
      this.addDiag(diags, defaultFile, line, message);
    }
  }

  private addDiag(
    diags: Map<string, vscode.Diagnostic[]>,
    file: string,
    line: number,
    message: string,
  ): void {
    const range = new vscode.Range(
      Math.max(0, line),
      0,
      Math.max(0, line),
      100,
    );
    const diag = new vscode.Diagnostic(
      range,
      message,
      vscode.DiagnosticSeverity.Error,
    );
    diag.source = "pbcompiler";

    if (!diags.has(file)) {
      diags.set(file, []);
    }
    diags.get(file)!.push(diag);
  }

  private getOutputPath(sourcePath: string): string {
    const dir = path.dirname(sourcePath);
    const base = path.basename(sourcePath, path.extname(sourcePath));
    const isWindows = process.platform === "win32";
    return path.join(dir, base + (isWindows ? ".exe" : ""));
  }

  private async detectCompiler(): Promise<string> {
    // Common installation paths per platform
    const candidates: string[] = [];

    if (process.platform === "win32") {
      candidates.push(
        "C:\\Program Files\\PureBasic\\Compilers\\pbcompiler.exe",
        "C:\\Program Files (x86)\\PureBasic\\Compilers\\pbcompiler.exe",
      );
    } else if (process.platform === "darwin") {
      candidates.push(
        "/Applications/PureBasic/pbcompiler",
        "/usr/local/bin/pbcompiler",
      );
    } else {
      candidates.push(
        "/usr/bin/pbcompiler",
        "/usr/local/bin/pbcompiler",
        `${process.env.HOME}/purebasic/pbcompiler`,
      );
    }

    const fs = await import("fs");
    for (const c of candidates) {
      if (fs.existsSync(c)) {
        return c;
      }
    }
    return "";
  }
}
