module.exports = {
  extends: require.resolve('./common-ts'),
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser', // 解析<script>
      },
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