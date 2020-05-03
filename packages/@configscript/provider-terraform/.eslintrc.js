module.exports = {
  root: true,
  extends: [require.resolve('@configscript/config-eslint')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
