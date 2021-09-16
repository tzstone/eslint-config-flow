# eslint-plugin-zflow

## Usage

### eslint-plugin-zflow

#### 安装

```code
npm install --save-dev eslint-plugin-zflow
```

#### 删除项目工程中与 eslint,prettier 相关的依赖

#### .eslintrc.js

```js
module.exports = {
  root: true,
  // 按需选择extends
  extends: ["plugin:zflow/common"],
  // extends: ['plugin:zflow/vue'],
  // extends: ['plugin:zflow/common-ts'],
  // extends: ['plugin:zflow/vue-ts'],
};
```

#### .prettierrc

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
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
max_line_length = 100

[**.bat]
end_of_line = crlf

```
