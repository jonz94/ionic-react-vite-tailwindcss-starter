/** @type {import('prettier').Config} */
module.exports = {
  bracketSameLine: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 120,

  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
  ],
}
