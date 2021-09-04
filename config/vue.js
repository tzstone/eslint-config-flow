module.exports = {
  extends: ['plugin:vue/recommended', require.resolve('./common')],
  rules: {
    'vue/max-attributes-per-line': 'off', // 与prettier冲突
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any',
        normal: 'any',
        component: 'always',
      },
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
};