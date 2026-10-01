import * as vscode from "vscode";

interface LintRule {
  pattern: RegExp;
  message: string;
  severity: vscode.DiagnosticSeverity;
}

const LINT_RULES: LintRule[] = [
  {
    pattern: /^\s*If\s+.+\s*=\s*.+\s+And\b/i,
    message:
      'Did you mean "And" for logical AND? Ensure correct operator usage.',
    severity: vscode.DiagnosticSeverity.Hint,
  },
  {
    pattern: /\bGoto\b/i,
    message:
      "Use of Goto is discouraged. Consider restructuring with loops or procedures.",
    severity: vscode.DiagnosticSeverity.Information,
  },
  {
    pattern: /^\s*Global\s+/i,
    message:
      "Global variable detected. Consider using Protected variables within procedures where possible.",
    severity: vscode.DiagnosticSeverity.Hint,
  },
];

export class PureBasicLinter {
  private diagnostics: vscode.DiagnosticCollection;

  constructor(diagnostics: vscode.DiagnosticCollection) {
    this.diagnostics = diagnostics;
  }

  lint(document: vscode.TextDocument): void {
    if (document.languageId !== "purebasic") {
      return;
    }

    const diags: vscode.Diagnostic[] = [];

    // ── Structural balance checks ─────────────────────────────────────
    const ifStack: number[] = [];
    const forStack: number[] = [];
    const whileStack: number[] = [];
    const procStack: number[] = [];
    const selectStack: number[] = [];

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const text = line.text;
      const trimmed = text.trim();
      if (!trimmed || trimmed.startsWith(";")) {
        continue;
      }

      const first = trimmed.split(/[\s(]/)[0].toLowerCase();

      switch (first) {
        case "if":
          ifStack.push(i);
          break;
        case "endif":
          ifStack.pop();
          break;
        case "for":
        case "foreach":
          forStack.push(i);
          break;
        case "next":
          forStack.pop();
          break;
        case "while":
          whileStack.push(i);
          break;
        case "wend":
          whileStack.pop();
          break;
        case "procedure":
        case "procedurec":
        case "proceduredll":
        case "procedurecdll":
          procStack.push(i);
          break;
        case "endprocedure":
          procStack.pop();
          break;
        case "select":
          selectStack.push(i);
          break;
        case "endselect":
          selectStack.pop();
          break;
      }

      // ── Per-line rules ────────────────────────────────────────────
      for (const rule of LINT_RULES) {
        if (rule.pattern.test(text)) {
          const range = new vscode.Range(i, 0, i, text.length);
          diags.push(new vscode.Diagnostic(range, rule.message, rule.severity));
        }
      }

      // ── Detect obvious string without closing quote ───────────────
      const noComment = text.replace(/;.*$/, "");
      const quoteCount = (noComment.match(/(?<!~)"/g) ?? []).length;
      if (quoteCount % 2 !== 0) {
        const range = new vscode.Range(i, 0, i, text.length);
        diags.push(
          new vscode.Diagnostic(
            range,
            "Possibly unterminated string literal.",
            vscode.DiagnosticSeverity.Warning,
          ),
        );
      }
    }

    // ── Report unclosed blocks ────────────────────────────────────────
    const reportUnclosed = (stack: number[], keyword: string) => {
      for (const lineNum of stack) {
        const range = new vscode.Range(
          lineNum,
          0,
          lineNum,
          document.lineAt(lineNum).text.length,
        );
        diags.push(
          new vscode.Diagnostic(
            range,
            `Unclosed '${keyword}' block — missing End${keyword[0].toUpperCase() + keyword.slice(1)}.`,
            vscode.DiagnosticSeverity.Error,
          ),
        );
      }
    };

    reportUnclosed(ifStack, "If");
    reportUnclosed(procStack, "Procedure");
    reportUnclosed(selectStack, "Select");
    // For/While are not reported as errors (ForEver is valid for While-less loops)

    this.diagnostics.set(document.uri, diags);
  }

  clear(uri: vscode.Uri): void {
    this.diagnostics.delete(uri);
  }
}
