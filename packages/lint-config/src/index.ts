import {Linter} from 'eslint'

const eslintConfig: Linter.BaseConfig = {
  parser: require.resolve('@typescript-eslint/parser'),
  // parserOptions: {
  //   tsconfigRootDir: process.cwd(),
  //   project: ['./tsconfig.json'],
  // },
  plugins: ['@typescript-eslint', 'functional'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:node/recommended',
    'plugin:unicorn/recommended',

    'plugin:functional/external-recommended',
    'plugin:functional/recommended',

    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/@typescript-eslint'),
  ],
  rules: {
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', {functions: false, classes: false}],
    'no-process-exit': 'off',
    'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/prevent-abbreviations': 'off',

    'functional/no-conditional-statement': ['off', {allowReturningBranches: 'ifExhaustive'}],
    'functional/no-expression-statement': ['error', {ignorePattern: 'console\\.log'}],

    // remove later
    '@typescript-eslint/no-explicit-any': 'off',
    'unicorn/filename-case': 'off',
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
}

export = eslintConfig
