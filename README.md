# Learning Typescript

Steps before starting:

* `npm init` -
    started a javascript project
* `npm i --save-dev jest typescript ts-jest @types/jest` -
    install typescript and ts-jest for testing

    **package.json**
    ```json
    {
      "scripts": {
        "test": "jest"
      }
    }
    ```
* `npm i --save-dev standard @typescript-eslint/eslint-plugin @typescript-eslint/linter snazzy` -
    code style with standardjs

    **package.json**
    ```json
    {
      "scripts": {
        "lint": "standard **/*.[jt]s --fix --verbose | snazzy"
      },
      "standard": {
        "parser": "@typescript-eslint/parser",
        "plugins": [
          "@typescript-eslint/eslint-plugin"
        ],
        "env": {
          "jest": true
        }
      }
    }
    ```
* Created my first test `src/function-declaration.test.ts`