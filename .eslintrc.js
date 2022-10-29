module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
  env: {
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
      },
      usePrettierrc: true,
      fileInfoOptions: {
        withNodeModules: false,
      },
    },
  },
}
