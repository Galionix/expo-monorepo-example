module.exports = {
  extends: 'eslint-config-universe',
  // do some additional things with it
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
