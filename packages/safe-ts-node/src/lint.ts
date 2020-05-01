import {CLIEngine} from 'eslint'

export function lint() {
  const cli = new CLIEngine({
    cwd: process.cwd(),
    useEslintrc: false,
    extensions: ['.js', '.ts'],
    // cache: true,

    baseConfig: {
      root: true,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
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

        'prettier',
        'prettier/@typescript-eslint',
      ],
      rules: {
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

        'functional/no-conditional-statement': ['error', {allowReturningBranches: 'ifExhaustive'}],

        // remove later
        '@typescript-eslint/no-explicit-any': 'off',
        'unicorn/filename-case': 'off',
      },
      settings: {
        node: {
          tryExtensions: ['.js', '.json', '.node', '.ts'],
        },
      },
    },
  })
  const report = cli.executeOnFiles(['.'])
  const formatter = cli.getFormatter('stylish')
  console.log(formatter(report.results))
}
