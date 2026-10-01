import * as vscode from "vscode";

export class PureBasicDocumentSymbolProvider
  implements vscode.DocumentSymbolProvider
{
  provideDocumentSymbols(
    document: vscode.TextDocument,
    _token: vscode.CancellationToken,
  ): vscode.DocumentSymbol[] {
    const symbols: vscode.DocumentSymbol[] = [];
    const procStack: { symbol: vscode.DocumentSymbol; indent: number }[] = [];

    const PROC_START =
      /^\s*(Procedure(?:C|DLL|CDLL)?(?:\.\w+)?)\s+(\w+)\s*(\([^)]*\))?/i;
    const PROC_END = /^\s*EndProcedure\b/i;
    const STRUCTURE = /^\s*Structure\s+(\w+)/i;
    const STRUCT_END = /^\s*EndStructure\b/i;
    const MODULE = /^\s*(?:Declare)?Module\s+(\w+)/i;
    const MODULE_END = /^\s*End(?:Declare)?Module\b/i;
    const LABEL = /^\s*(\w+):\s*(?:;.*)?$/;
    const GLOBAL = /^\s*(Global|Protected|Static|Threaded)\s+(.+)/i;
    const CONST = /^\s*#(\w+)\s*=/;

    let structStack: vscode.DocumentSymbol[] = [];
    let moduleStack: vscode.DocumentSymbol[] = [];

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const text = line.text;
      let m: RegExpMatchArray | null;

      if ((m = text.match(PROC_START))) {
        const range = new vscode.Range(i, 0, i, text.length);
        const sym = new vscode.DocumentSymbol(
          m[2],
          m[3] ?? "()",
          vscode.SymbolKind.Function,
          range,
          range,
        );
        const parent = moduleStack[moduleStack.length - 1] ?? null;
        if (parent) {
          parent.children.push(sym);
        } else {
          symbols.push(sym);
        }
        procStack.push({ symbol: sym, indent: i });
      } else if (text.match(PROC_END) && procStack.length) {
        const top = procStack.pop()!;
        const endRange = new vscode.Range(
          top.symbol.range.start,
          new vscode.Position(i, text.length),
        );
        top.symbol.range = endRange;
      } else if ((m = text.match(STRUCTURE))) {
        const range = new vscode.Range(i, 0, i, text.length);
        const sym = new vscode.DocumentSymbol(
          m[1],
          "",
          vscode.SymbolKind.Struct,
          range,
          range,
        );
        symbols.push(sym);
        structStack.push(sym);
      } else if (text.match(STRUCT_END) && structStack.length) {
        const top = structStack.pop()!;
        top.range = new vscode.Range(
          top.range.start,
          new vscode.Position(i, text.length),
        );
      } else if ((m = text.match(MODULE))) {
        const range = new vscode.Range(i, 0, i, text.length);
        const sym = new vscode.DocumentSymbol(
          m[1],
          "Module",
          vscode.SymbolKind.Module,
          range,
          range,
        );
        symbols.push(sym);
        moduleStack.push(sym);
      } else if (text.match(MODULE_END) && moduleStack.length) {
        const top = moduleStack.pop()!;
        top.range = new vscode.Range(
          top.range.start,
          new vscode.Position(i, text.length),
        );
      } else if ((m = text.match(CONST)) && !text.trim().startsWith(";")) {
        const range = new vscode.Range(i, 0, i, text.length);
        const sym = new vscode.DocumentSymbol(
          `#${m[1]}`,
          "constant",
          vscode.SymbolKind.Constant,
          range,
          range,
        );
        const proc = procStack[procStack.length - 1]?.symbol;
        if (proc) {
          proc.children.push(sym);
        } else {
          symbols.push(sym);
        }
      } else if ((m = text.match(LABEL))) {
        // Skip common noise like Else:, etc.
        if (
          !["else", "endif", "next", "wend", "until", "forever"].includes(
            m[1].toLowerCase(),
          )
        ) {
          const range = new vscode.Range(i, 0, i, text.length);
          const sym = new vscode.DocumentSymbol(
            m[1],
            "label",
            vscode.SymbolKind.Field,
            range,
            range,
          );
          symbols.push(sym);
        }
      }
    }

    return symbols;
  }
}
