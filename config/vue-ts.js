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
        'vue/html-indent': 0,
        'vue/max-attributes-per-line': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-v-html': 0,
        'vue/require-default-prop': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/html-self-closing': ['error', {
          html: {
            void: 'any',
            normal: 'any',
            component: 'always',
          },
        }]
      }
    }
  ]
}