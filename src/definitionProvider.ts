import * as vscode from "vscode";

export class PureBasicDefinitionProvider implements vscode.DefinitionProvider {
  async provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
  ): Promise<vscode.Location | vscode.Location[] | undefined> {
    const range = document.getWordRangeAtPosition(position, /[a-zA-Z_]\w*/);
    if (!range) {
      return undefined;
    }
    const word = document.getText(range);

    // 1. Look in the current document
    const localDef = this.searchDocument(document, word);
    if (localDef) {
      return localDef;
    }

    // 2. Look in included files (IncludeFile / XIncludeFile)
    const includes = this.getIncludes(document);
    for (const inc of includes) {
      try {
        const incDoc = await vscode.workspace.openTextDocument(inc);
        const def = this.searchDocument(incDoc, word);
        if (def) {
          return def;
        }
      } catch {
        /* file not found */
      }
    }

    // 3. Search across all open .pb/.pbi files in the workspace
    const workspaceFiles = await vscode.workspace.findFiles(
      "**/*.{pb,pbi}",
      "**/node_modules/**",
      50,
    );
    for (const uri of workspaceFiles) {
      if (uri.fsPath === document.fileName) {
        continue;
      }
      try {
        const doc = await vscode.workspace.openTextDocument(uri);
        const def = this.searchDocument(doc, word);
        if (def) {
          return def;
        }
      } catch {
        /* skip */
      }
    }

    return undefined;
  }

  private searchDocument(
    document: vscode.TextDocument,
    word: string,
  ): vscode.Location | undefined {
    // Procedure definition
    const procPattern = new RegExp(
      `^\\s*Procedure(?:C|DLL|CDLL)?(?:\\.\\w+)?\\s+${word}\\s*\\(`,
      "im",
    );
    // Macro definition
    const macroPattern = new RegExp(`^\\s*Macro\\s+${word}\\b`, "im");
    // Label
    const labelPattern = new RegExp(`^\\s*${word}:\\s*(?:;.*)?$`, "m");
    // Constant definition
    const constPattern = new RegExp(`^\\s*#${word}\\s*=`, "m");
    // Structure
    const structPattern = new RegExp(`^\\s*Structure\\s+${word}\\b`, "im");
    // Global/Dim
    const varPattern = new RegExp(
      `^\\s*(?:Global|Dim|Define|Protected|Static|Shared|Threaded)\\s+${word}\\b`,
      "im",
    );

    const patterns = [
      procPattern,
      macroPattern,
      labelPattern,
      constPattern,
      structPattern,
      varPattern,
    ];
    const text = document.getText();

    for (const pattern of patterns) {
      const match = pattern.exec(text);
      if (match) {
        const pos = document.positionAt(match.index);
        return new vscode.Location(document.uri, pos);
      }
    }
    return undefined;
  }

  private getIncludes(document: vscode.TextDocument): string[] {
    const dir = require("path").dirname(document.fileName);
    const includes: string[] = [];
    const includePattern = /^\s*(?:X?IncludeFile)\s+"([^"]+)"/gim;
    let m: RegExpExecArray | null;
    const text = document.getText();
    while ((m = includePattern.exec(text)) !== null) {
      includes.push(require("path").resolve(dir, m[1]));
    }
    return includes;
  }
}
