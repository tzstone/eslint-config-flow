module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true, // 支持es6语法, 同时启用es6全局变量
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020, // 支持ecma2020语法
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // 启用jsx
    }
  },
  // eslint-config-prettier: 关闭所有可能与prettier冲突的eslint样式规则
  // eslint-plugin-prettier: 将prettier当做eslint规则运行
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'semi': ['error', 'never'],
    'quotes': 'off',
    'block-spacing': 'error',
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'arrow-parens':['error', 'as-needed'],
    'array-bracket-spacing': ['error', 'never'],
    'indent': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
};