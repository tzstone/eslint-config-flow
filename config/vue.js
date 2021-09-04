module.exports = {
  extends: ['plugin:vue/recommended', require.resolve('./common')],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': 1
    }],
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