module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "env": {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  }
}
