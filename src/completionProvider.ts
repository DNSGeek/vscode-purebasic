import * as vscode from 'vscode';
import {
  PB_FUNCTIONS, PB_KEYWORDS, PB_COMPILER_CONSTANTS,
  PB_COMMON_CONSTANTS, PB_TYPES
} from './keywords';

export class PureBasicCompletionProvider implements vscode.CompletionItemProvider {

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext
  ): vscode.CompletionItem[] {
    const linePrefix = document.lineAt(position).text.substring(0, position.character);
    const items: vscode.CompletionItem[] = [];

    // ── Built-in functions ────────────────────────────────────────────
    for (const fn of PB_FUNCTIONS) {
      const item = new vscode.CompletionItem(fn.name, vscode.CompletionItemKind.Function);
      item.detail = `(${fn.category}) ${fn.signature}`;
      item.documentation = new vscode.MarkdownString(
        `**${fn.name}**\n\n\`\`\`pb\n${fn.signature}\n\`\`\`\n\n${fn.documentation}`
      );
      item.insertText = new vscode.SnippetString(
        this.buildSnippetFromSignature(fn.name, fn.signature)
      );
      items.push(item);
    }

    // ── Keywords ──────────────────────────────────────────────────────
    for (const kw of PB_KEYWORDS) {
      const item = new vscode.CompletionItem(kw, vscode.CompletionItemKind.Keyword);
      item.detail = 'keyword';
      items.push(item);
    }

    // ── Compiler constants ────────────────────────────────────────────
    if (linePrefix.includes('#')) {
      for (const c of [...PB_COMPILER_CONSTANTS, ...PB_COMMON_CONSTANTS]) {
        const item = new vscode.CompletionItem(c, vscode.CompletionItemKind.Constant);
        item.detail = 'PureBasic constant';
        items.push(item);
      }
    }

    // ── Type suffixes after dot ───────────────────────────────────────
    if (linePrefix.match(/\.\s*$/)) {
      for (const t of PB_TYPES) {
        const item = new vscode.CompletionItem(t, vscode.CompletionItemKind.TypeParameter);
        item.detail = `type: .${t}`;
        item.documentation = new vscode.MarkdownString(this.typeDoc(t));
        items.push(item);
      }
      return items;
    }

    // ── Procedure / label symbols from the current document ──────────
    const docSymbols = this.extractDocumentSymbols(document);
    for (const sym of docSymbols) {
      const kind = sym.kind === 'procedure'
        ? vscode.CompletionItemKind.Function
        : sym.kind === 'label'
          ? vscode.CompletionItemKind.Reference
          : vscode.CompletionItemKind.Variable;
      const item = new vscode.CompletionItem(sym.name, kind);
      item.detail = sym.kind === 'procedure' ? 'Procedure (this file)' : sym.kind;
      items.push(item);
    }

    return items;
  }

  private buildSnippetFromSignature(name: string, signature: string): string {
    // Extract the parameter list from signature like "Foo(A, B [, C])"
    const match = signature.match(/\(([^)]*)\)/);
    if (!match || !match[1].trim()) {
      return `${name}($1)$0`;
    }
    const params = match[1].split(',').map(p => p.trim().replace(/[\[\]]/g, ''));
    if (params.length === 0 || (params.length === 1 && !params[0])) {
      return `${name}()$0`;
    }
    const snippetParams = params.map((p, i) => `\${${i + 1}:${p}}`).join(', ');
    return `${name}(${snippetParams})$0`;
  }

  private typeDoc(t: string): string {
    const docs: Record<string, string> = {
      'b': 'Byte: signed 8-bit integer (-128 to 127)',
      'a': 'Ascii: unsigned 8-bit integer (0 to 255)',
      'w': 'Word: signed 16-bit integer (-32768 to 32767)',
      'u': 'Unicode: unsigned 16-bit integer (0 to 65535)',
      'l': 'Long: signed 32-bit integer',
      'i': 'Integer: native signed integer (32 or 64-bit depending on target)',
      'q': 'Quad: signed 64-bit integer',
      'f': 'Float: 32-bit floating point',
      'd': 'Double: 64-bit floating point',
      's': 'String: Unicode string',
      'c': 'Character: Unicode character',
      'String': 'String: Unicode string (long form)',
    };
    return docs[t] ?? t;
  }

  private extractDocumentSymbols(document: vscode.TextDocument): Array<{ name: string; kind: string }> {
    const symbols: Array<{ name: string; kind: string }> = [];
    const procRegex = /^\s*Procedure[CDLL]*\.?\w*\s+(\w+)\s*\(/im;
    const labelRegex = /^\s*(\w+):\s*$/m;
    const globalRegex = /^\s*(?:Global|Protected|Static|Define)\s+(\w+)/im;

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i).text;
      let m: RegExpMatchArray | null;
      if ((m = line.match(/^\s*Procedure[CDLL]*\.?\w*\s+(\w+)\s*\(/i))) {
        symbols.push({ name: m[1], kind: 'procedure' });
      } else if ((m = line.match(/^\s*(\w+):\s*$/))) {
        symbols.push({ name: m[1], kind: 'label' });
      } else if ((m = line.match(/^\s*(?:Global|Protected|Static|Define)\s+(\w+)/i))) {
        symbols.push({ name: m[1], kind: 'variable' });
      }
    }
    return symbols;
  }
}
