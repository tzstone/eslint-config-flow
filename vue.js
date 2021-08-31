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
  // dependencies: eslint eslint-plugin-vue
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
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