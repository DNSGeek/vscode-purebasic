import * as vscode from "vscode";
import { PureBasicCompletionProvider } from "./completionProvider";
import { PureBasicHoverProvider } from "./hoverProvider";
import { PureBasicDocumentSymbolProvider } from "./symbolProvider";
import { PureBasicDefinitionProvider } from "./definitionProvider";
import { PureBasicFormatter } from "./formatter";
import { PureBasicLinter } from "./linter";
import { CompilerService } from "./compilerService";

let outputChannel: vscode.OutputChannel;
let linter: PureBasicLinter;
let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {
  console.log("PureBasic extension activated");

  outputChannel = vscode.window.createOutputChannel("PureBasic");
  diagnosticCollection =
    vscode.languages.createDiagnosticCollection("purebasic");

  const selector: vscode.DocumentSelector = {
    language: "purebasic",
    scheme: "file",
  };

  // ── Completion Provider ───────────────────────────────────────────────
  const completionProvider = new PureBasicCompletionProvider();
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      selector,
      completionProvider,
      ".",
      "#",
      "(",
    ),
  );

  // ── Hover Provider ────────────────────────────────────────────────────
  const hoverProvider = new PureBasicHoverProvider();
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(selector, hoverProvider),
  );

  // ── Document Symbol Provider (Outline) ───────────────────────────────
  const symbolProvider = new PureBasicDocumentSymbolProvider();
  context.subscriptions.push(
    vscode.languages.registerDocumentSymbolProvider(selector, symbolProvider),
  );

  // ── Go-to-Definition Provider ─────────────────────────────────────────
  const definitionProvider = new PureBasicDefinitionProvider();
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(selector, definitionProvider),
  );

  // ── Document Formatter ────────────────────────────────────────────────
  const formatter = new PureBasicFormatter();
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      selector,
      formatter,
    ),
  );

  // ── Linter / Diagnostics ──────────────────────────────────────────────
  linter = new PureBasicLinter(diagnosticCollection);
  if (
    vscode.workspace
      .getConfiguration("purebasic")
      .get<boolean>("enableLinting", true)
  ) {
    const lintOnChange = (doc: vscode.TextDocument) => {
      if (doc.languageId === "purebasic") {
        linter.lint(doc);
      }
    };
    context.subscriptions.push(
      vscode.workspace.onDidOpenTextDocument(lintOnChange),
    );
    context.subscriptions.push(
      vscode.workspace.onDidChangeTextDocument((e) => lintOnChange(e.document)),
    );
    context.subscriptions.push(
      vscode.workspace.onDidSaveTextDocument(lintOnChange),
    );
    // lint all currently open pb documents
    vscode.workspace.textDocuments.forEach(lintOnChange);
  }

  // ── Compiler Commands ─────────────────────────────────────────────────
  const compilerService = new CompilerService(outputChannel);

  context.subscriptions.push(
    vscode.commands.registerCommand("purebasic.compile", async () => {
      const doc = vscode.window.activeTextEditor?.document;
      if (!doc) {
        vscode.window.showErrorMessage("No active PureBasic file.");
        return;
      }
      await compilerService.compile(doc.fileName, false);
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("purebasic.compileRun", async () => {
      const doc = vscode.window.activeTextEditor?.document;
      if (!doc) {
        vscode.window.showErrorMessage("No active PureBasic file.");
        return;
      }
      await doc.save();
      await compilerService.compile(doc.fileName, true);
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("purebasic.formatDocument", async () => {
      await vscode.commands.executeCommand("editor.action.formatDocument");
    }),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("purebasic.showOutput", () => {
      outputChannel.show();
    }),
  );

  // ── Format on save ────────────────────────────────────────────────────
  context.subscriptions.push(
    vscode.workspace.onWillSaveTextDocument((event) => {
      const cfg = vscode.workspace.getConfiguration("purebasic");
      if (
        cfg.get<boolean>("formatOnSave") &&
        event.document.languageId === "purebasic"
      ) {
        event.waitUntil(
          vscode.commands.executeCommand(
            "editor.action.formatDocument",
          ) as Thenable<vscode.TextEdit[]>,
        );
      }
    }),
  );

  context.subscriptions.push(outputChannel, diagnosticCollection);
}

export function deactivate() {
  diagnosticCollection?.dispose();
  outputChannel?.dispose();
}
