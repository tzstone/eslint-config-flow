module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/recommended', require.resolve('./common')],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any',
        normal: 'any',
        component: 'always',
      },
    }]
  }
}