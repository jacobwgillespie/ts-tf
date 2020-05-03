import {Config} from '@monorepolint/core'

const config: Config = {
  rules: {
    ':alphabetical-dependencies': true,
    './support/alphabeticalScripts': true,
    ':consistent-dependencies': true,

    ':package-script': {
      options: {
        scripts: {
          clean: 'rm -rf dist *.tsbuildinfo',
          // "compile": "tsc -b",
          // "watch": "tsc -b -w",
        },
      },
    },

    ':package-order': {
      options: {
        order: [
          'name',
          'version',
          'description',
          'author',
          'contributors',
          'url',
          'license',
          'private',
          'engines',
          'bin',
          'main',
          'module',
          'types',
          'typings',
          'style',
          'sideEffects',
          'workspaces',
          'husky',
          'lint-staged',
          'files',
          'scripts',
          'publishConfig',
          'resolutions',
          'dependencies',
          'peerDependencies',
          'devDependencies',
          'optionalDependencies',
        ],
      },
    },
  },
}

module.exports = config
