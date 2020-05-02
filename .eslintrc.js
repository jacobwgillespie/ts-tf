module.exports = {
  root: true,
  extends: [require.resolve('@configscript/lint-config')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./packages/*/tsconfig.json', './packages/@configscript/*/tsconfig.json'],
  },
}
