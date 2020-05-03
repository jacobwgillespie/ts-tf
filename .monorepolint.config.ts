import {Config} from '@monorepolint/core'

const config: Config = {
  rules: {
    ':file-contents': {
      options: {
        file: '.gitignore',
        templateFile: './support/template.gitignore',
      },
    },

    ':standard-tsconfig': {
      options: {
        templateFile: './support/tsconfig.template.json',
      },
      excludePackages: ['@configscript/config-typescript'],
    },

    ':consistent-dependencies': true,

    ':package-script': {
      options: {
        scripts: {
          clean: 'rm -rf dist *.tsbuildinfo',
          build: 'tsc -b',
          lint: 'eslint . --ext .ts',
          watch: 'tsc -b -w',
        },
      },
      excludePackages: ['@configscript/config-typescript'],
    },

    ':package-entry': [
      {
        options: {
          entries: {
            author: 'Jacob Gillespie <jacobwgillespie@gmail.com>',
            license: 'MIT',
            // funding: {
            //   type: 'GitHub',
            //   url: 'https://github.com/sponsors/jacobwgillespie',
            // },
            // publishConfig: {
            //   access: 'public',
            // },
          },
        },
      },
      {
        options: {
          entries: {
            main: './dist/index.js',
            types: './dist/index.d.ts',
            // files: ['dist'],
          },
        },
        excludePackages: ['@configscript/config-typescript'],
      },
    ],

    ':alphabetical-dependencies': true,
    './support/alphabeticalScripts': true,

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
