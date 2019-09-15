# Learning Typescript

This project documents my learning experience with Typescript.

## Steps

1. Installed needed packages

    ```bash
    # Start a node project
    npm init
    # Install typescript and ts-jest for testing
    npm i --save-dev \
        typescript \
        jest \
        ts-jest \
        @types/jest
    # Add code style with StandardJs
    npm i --save-dev \
        standard \
        @typescript-eslint/eslint-plugin \
        @typescript-eslint/linter snazzy
    ```
2. Configured project's **package.json**

    ```json
    {
      "scripts": {
        "test": "jest",
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
3. Created first typescript test `src/function-declaration.test.ts`