import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    prettierConfig,
    {
        "extends": ["eslint:recommended", "plugin:prettier/recommended"],
        "env": {
            "node": true,
            "es6": true
        },
        "globals": {
            "process": "readonly",
            "console": "readonly"
        },
        "rules": {
            "no-console": "off",
            "no-unused-vars": "warn",
            "prettier/prettier": "error"
        }
    }
];