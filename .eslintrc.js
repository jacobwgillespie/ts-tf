module.exports = {
  root: true,
  extends: [require.resolve('@infrascript/config-eslint')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./packages/*/tsconfig.json', './packages/@infrascript/*/tsconfig.json'],
  },
}
