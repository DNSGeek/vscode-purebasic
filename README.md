# PureBasic for Visual Studio Code

A full-featured VS Code extension for the [PureBasic](https://www.purebasic.com/) programming language.

## Features

### ✨ Syntax Highlighting

Full syntax highlighting for `.pb`, `.pbi`, `.pbf`, and `.pbp` files:

- Keywords (`If`, `For`, `Procedure`, `Structure`, ...)
- All built-in functions (String, Math, Memory, File, GUI, Drawing, ...)
- Compiler directives (`CompilerIf`, `CompilerSelect`, ...)
- Constants (`#True`, `#False`, `#PB_Compiler_OS`, ...)
- Type suffixes (`.i`, `.l`, `.q`, `.s`, `.d`, ...)
- Hex (`$FF`), binary (`%1010`), and numeric literals
- Comments (`;`)

### 🧠 IntelliSense / Autocomplete

- **Built-in functions**: 150+ functions with signatures and documentation
- **Keywords**: All PureBasic language keywords
- **Constants**: Compiler constants and common `#PB_*` constants
- **Snippets**: 25+ code snippets for common patterns
- **Document symbols**: Procedures, structures, labels, and variables from the current file
- **Type suffixes**: After typing `.`, shows all valid PureBasic types with descriptions

### 📖 Hover Documentation

Hover over any built-in function or keyword to see:

- Full signature with parameter names
- Category (String, Math, Memory, etc.)
- Return type
- Description

### 🧭 Go to Definition

- `F12` / Ctrl+Click jumps to procedure and macro definitions
- Works across the current file, included files (`IncludeFile`), and workspace `.pb`/`.pbi` files

### 📋 Document Outline

The Explorer panel Outline view and breadcrumbs show:

- Procedures (with parameters)
- Structures
- Modules
- Constants (`#...`)
- Labels

### 🧹 Code Formatting

**Format Document** (`Shift+Alt+F`) auto-indents your code based on block structure.

Enable **Format on Save** via settings:

```json
"purebasic.formatOnSave": true
```

### 🔍 Linting

Background diagnostics catch common issues:

- Unclosed `If` / `Procedure` / `Select` blocks
- Unterminated string literals
- Use of `Goto` (informational)

### 🔨 Compile & Run

Integrate directly with the PureBasic compiler:

| Command                  | Shortcut  | Description                      |
| ------------------------ | --------- | -------------------------------- |
| PureBasic: Compile       | `Ctrl+F5` | Compile the current file         |
| PureBasic: Compile & Run | `F5`      | Compile and run the current file |

**Setup**: Set your compiler path in settings:

```json
"purebasic.compilerPath": "/Applications/PureBasic/pbcompiler"
```

On **Windows**: `C:\Program Files\PureBasic\Compilers\pbcompiler.exe`
On **macOS**: `/Applications/PureBasic/pbcompiler`
On **Linux**: `/usr/bin/pbcompiler` or `~/purebasic/pbcompiler`

The extension will auto-detect common installation paths if the setting is not specified.

Compiler errors appear both in the **Output** panel and as **Problems** / inline squiggles in the editor.

## Configuration

| Setting                   | Default | Description                             |
| ------------------------- | ------- | --------------------------------------- |
| `purebasic.compilerPath`  | `""`    | Path to `pbcompiler` / `pbcompiler.exe` |
| `purebasic.compilerArgs`  | `[]`    | Extra arguments passed to the compiler  |
| `purebasic.enableLinting` | `true`  | Enable background linting               |
| `purebasic.formatOnSave`  | `false` | Auto-format on save                     |
| `purebasic.indentSize`    | `2`     | Spaces per indent level                 |

## Snippets

| Prefix    | Description                 |
| --------- | --------------------------- |
| `proc`    | Procedure definition        |
| `procr`   | Procedure with return value |
| `if`      | If/EndIf block              |
| `ife`     | If/Else/EndIf block         |
| `for`     | For/Next loop               |
| `foreach` | ForEach loop                |
| `while`   | While/Wend loop             |
| `repeat`  | Repeat/Until loop           |
| `forever` | Repeat/ForEver loop         |
| `select`  | Select/EndSelect block      |
| `struct`  | Structure definition        |
| `module`  | Module + DeclareModule      |
| `macro`   | Macro definition            |
| `newlist` | NewList declaration         |
| `newmap`  | NewMap declaration          |
| `dim`     | Array declaration           |
| `window`  | OpenWindow with event loop  |
| `console` | OpenConsole boilerplate     |
| `cifwin`  | CompilerIf Windows          |
| `cifmac`  | CompilerIf macOS            |
| `ciflin`  | CompilerIf Linux            |
| `data`    | DataSection block           |
| `dbg`     | Debug output line           |

## Building from Source

```bash
git clone https://github.com/DNSGeek/vscode-purebasic.git
cd vscode-purebasic
npm install
npm run compile
```

To package as a `.vsix`:

```bash
npm run package
```

Install the `.vsix` via **Extensions → Install from VSIX...** in VS Code.

## Contributing

Keyword database is in `src/keywords.ts`. To add documentation for more functions, add entries to the `PB_FUNCTIONS` array following the existing pattern.

## License

GPL v2
