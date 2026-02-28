import * as vscode from 'vscode';

// Keywords that increase indent after them
const INDENT_AFTER = new Set([
  'if', 'else', 'elseif',
  'for', 'foreach',
  'while',
  'repeat',
  'select', 'case', 'default',
  'procedure', 'procedurec', 'proceduredll', 'procedurecdll',
  'structure', 'structureunion',
  'interface',
  'macro',
  'module', 'declaremodule',
  'compileri', 'compilerelse', 'compilerelseif',
  'with',
  'datasection',
]);

// Keywords that reduce indent (they end a block)
const DEDENT_BEFORE = new Set([
  'endif', 'next', 'wend', 'forever', 'until',
  'endselect',
  'endprocedure',
  'endstructure', 'endstructureunion',
  'endinterface',
  'endmacro',
  'endmodule', 'enddeclaremodule',
  'compilerendif',
  'endwith',
  'enddatasection',
  'else', 'elseif',
  'compilerelse', 'compilerelseif',
  'case', 'default',
]);

export class PureBasicFormatter implements vscode.DocumentFormattingEditProvider {

  provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    _token: vscode.CancellationToken
  ): vscode.TextEdit[] {
    const cfg = vscode.workspace.getConfiguration('purebasic');
    const indentSize = cfg.get<number>('indentSize', 2);
    const indentChar = options.insertSpaces ? ' '.repeat(indentSize) : '\t';
    const edits: vscode.TextEdit[] = [];

    let level = 0;

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const original = line.text;
      const trimmed = original.trim();

      // Skip blank lines and pure comment lines
      if (!trimmed || trimmed.startsWith(';')) {
        continue;
      }

      // Determine first meaningful token (ignore labels for indent logic)
      const firstToken = trimmed.split(/[\s(]/)[0].toLowerCase();

      // Decrease indent before this line if it's a dedent keyword
      if (DEDENT_BEFORE.has(firstToken) && level > 0) {
        level--;
      }

      const newIndent = indentChar.repeat(level);
      const newText = newIndent + trimmed;

      if (newText !== original) {
        edits.push(vscode.TextEdit.replace(line.range, newText));
      }

      // Increase indent after this line if it's an indent keyword
      if (INDENT_AFTER.has(firstToken)) {
        level++;
      }
    }

    return edits;
  }
}
