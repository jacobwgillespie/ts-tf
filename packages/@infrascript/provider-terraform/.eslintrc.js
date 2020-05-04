module.exports = {
  root: true,
  extends: [require.resolve('@infrascript/config-eslint')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
