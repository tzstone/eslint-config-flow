# eslint-plugin-flow

## Usage

### eslint-plugin-flow

#### 安装

```code
npm install --save-dev eslint-plugin-flow
```

#### 删除项目工程中与 eslint,prettier 相关的依赖

#### .eslintrc.js

```js
module.exports = {
  root: true,
  // 按需选择extends
  extends: ["plugin:flow/common"],
  // extends: ['plugin:flow/vue'],
  // extends: ['plugin:flow/common-ts'],
  // extends: ['plugin:flow/vue-ts'],
};
```

#### .prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "arrowParens": "avoid"
}
```

#### .editorconfig

```txt
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
max_line_length = 120

[**.bat]
end_of_line = crlf

```

#### package

```code
- "@babel/eslint-parser": "^7.12.0",
- "@typescript-eslint/parser": "^4.28.0",
- "@typescript-eslint/eslint-plugin": "^4.28.0",
- "eslint-plugin-vue": "~7.13.0",
- "eslint-config-prettier": "~8.3.0",
- "eslint-plugin-prettier": "~3.4.0",
- "eslint": "~7.29.0",
- "prettier": "~2.3.0"
```
