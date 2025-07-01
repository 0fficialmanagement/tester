import js from '@eslint/js';
import react from 'eslint-plugin-react';

// ESLint v9+ flat config
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        AOS: 'readonly',
        bootstrap: 'readonly',
        intlTelInput: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        URLSearchParams: 'readonly',
        alert: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { react },
    settings: {
      react: {
        version: '18.0',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'no-unused-vars': [
        'warn',
        { varsIgnorePattern: 'paymentMethods|countryInput|currencyInput|languageInput' },
      ],
      'no-undef': 'error',
      'no-console': 'off',
    },
  },
];
