import * as vscode from 'vscode';
import { PB_FUNCTIONS, PB_KEYWORDS, PBFunction } from './keywords';

const FUNCTION_MAP = new Map<string, PBFunction>(
  PB_FUNCTIONS.map(f => [f.name.toLowerCase(), f])
);

const KEYWORD_SET = new Set(PB_KEYWORDS.map(k => k.toLowerCase()));

export class PureBasicHoverProvider implements vscode.HoverProvider {

  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken
  ): vscode.Hover | undefined {
    const range = document.getWordRangeAtPosition(position, /[#]?[a-zA-Z_][a-zA-Z0-9_]*/);
    if (!range) { return undefined; }

    const word = document.getText(range);
    const lower = word.toLowerCase();

    // ── Built-in function ─────────────────────────────────────────────
    const fn = FUNCTION_MAP.get(lower);
    if (fn) {
      const md = new vscode.MarkdownString();
      md.appendMarkdown(`### ${fn.name} *(${fn.category})*\n\n`);
      md.appendCodeblock(fn.signature, 'purebasic');
      md.appendMarkdown(`\n${fn.documentation}`);
      if (fn.returnType) {
        md.appendMarkdown(`\n\n**Returns:** \`.${fn.returnType}\``);
      }
      return new vscode.Hover(md, range);
    }

    // ── Keyword ───────────────────────────────────────────────────────
    if (KEYWORD_SET.has(lower)) {
      const md = new vscode.MarkdownString();
      md.appendMarkdown(`**${word}** — PureBasic keyword`);
      return new vscode.Hover(md, range);
    }

    // ── User-defined procedure in this document ───────────────────────
    const procDef = this.findProcedureDefinition(document, word);
    if (procDef) {
      const md = new vscode.MarkdownString();
      md.appendMarkdown(`### ${procDef.name}\n\n*(User-defined procedure, line ${procDef.line + 1})*\n\n`);
      md.appendCodeblock(procDef.signature, 'purebasic');
      return new vscode.Hover(md, range);
    }

    return undefined;
  }

  private findProcedureDefinition(
    document: vscode.TextDocument,
    name: string
  ): { name: string; line: number; signature: string } | undefined {
    const pattern = new RegExp(`^\\s*(Procedure[CDLL]*.?\\w*)\\s+(${name})\\s*\\([^)]*\\)`, 'i');
    for (let i = 0; i < document.lineCount; i++) {
      const text = document.lineAt(i).text;
      const m = text.match(pattern);
      if (m) {
        return {
          name,
          line: i,
          signature: text.trim(),
        };
      }
    }
    return undefined;
  }
}
