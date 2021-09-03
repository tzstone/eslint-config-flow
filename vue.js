const rules = require('./rules');

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint', // dependencies: babel-eslint
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // dependencies: eslint eslint-plugin-vue eslint-plugin-prettier eslint-config-prettier
  // eslint-config-prettier: 关闭所有可能与prettier冲突的eslint样式规则
  // eslint-plugin-prettier: 将prettier当做eslint规则运行
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    ...rules,
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline":"off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
  }
};