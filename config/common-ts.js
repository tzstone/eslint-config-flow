module.exports = {
  extends: require.resolve('./common'),
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: 'plugin:@typescript-eslint/recommended',
      rules: {
        '@typescript-eslint/ban-ts-comment': 0, // 禁止ts指令注释
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-explicit-any': 0, // 禁止使用any类型
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0
      }
    }
  ]
}