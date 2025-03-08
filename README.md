This is a CodeBlock component that adds the ability to display symbols instead of line numbers to denote a console command. Unlike adding the symbol manually, clicking the copy button won't copy the symbol.

## To use

To add this component, simply copy the CodeBlock directory into your Docusaurus project's `src/theme` directory.

To use it, add `showLineSymbols` to your code block. It needs to have a language, much like `showLineNumbers`.

````
```text showLineSymbols
echo 'this is a test'
```
````

This will display `$` in place of the line numbers by default.

To change the symbol, add `symbol="<symbol>"`

````
```text showLineSymbols symbol=">"
echo 'this is a test'
```
````

![Image](https://github.com/user-attachments/assets/52aa2cd8-f956-4d6a-bdcf-b1d3fd1e6f90)