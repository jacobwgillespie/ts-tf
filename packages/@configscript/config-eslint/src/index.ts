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
    '@typescript-eslint/no-unused-vars': [
      'error',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false, argsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': ['error', {ignoreRhs: true}],
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-use-before-define': ['error', {functions: false, classes: false}],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': ['error', {checkCompoundAssignments: true}],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    // 'functional/functional-parameters': ['error', {ignorePattern: 'toJSON'}],
    'functional/no-conditional-statement': ['off', {allowReturningBranches: 'ifExhaustive'}],
    // 'functional/no-expression-statement': ['error', {ignorePattern: 'console\\.log'}],
    'functional/no-method-signature': 'error',

    'no-process-exit': 'off',

    'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
    'node/no-extraneous-import': 'off',

    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // Allow classes
    'functional/no-this-expression': 'off',
    'functional/functional-parameters': ['error', {enforceParameterCount: false}],
    'functional/no-class': 'off',
    'functional/no-expression-statement': [
      'error',
      {ignorePattern: ['console\\.log', 'super', 'Object\\.freeze', 'Object\\.seal', '[\\w]+ =', 'process\\.exit']},
    ],

    'functional/prefer-type-literal': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // remove later
    'unicorn/filename-case': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['error', {allowNullable: true, allowSafe: true}],
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
}

export = eslintConfig
