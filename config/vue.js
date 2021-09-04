module.exports = {
  extends: require.resolve('./common'),
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: 'plugin:vue/recommended',
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
    },
  ],
};