module.exports = {
  root: true,
  extends: [require.resolve('@configscript/lint-config')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
