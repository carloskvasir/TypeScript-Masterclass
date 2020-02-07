[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
# TypeScript Masterclass

## ❓ About - Sobre

Este repositorio tem o proposito de documentar para futuras consultas como desenvolver em TypeScript utilizando o sucrase no desenvolvimento.

✔️ Sucrase gera o código executavel  
⚠️ Sucrase é mais rápido por não fazer todas etapas de outros transpiladores.  
🚷 __NÂO USE NO BUILD DA PRODUÇÂO__

## Configurando ESlint

Adicione como dependecia de desenvolvimento o eslint e estes plugins:

``` sh
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Configure o ESLint 
```sh
yarn eslint --init
```
Enforce >> import/export >> para node (Standard) >> salvar em JS

### ✔️✔️ Resultado atual
-----------------------

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};

```

## Configurando Prettier

Adicione como dependecia de desenvolvimento o prettier e estes plugins:

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```
### ✔️✔️ Resultado atual
-----------------------
```js
...
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard",
  ],
...
  ```
Adicione em .eslintrc.js/extends(2)

`'prettier/@typescript-eslint'`


Feito por José Carlos de Lima Junior (kvasir)