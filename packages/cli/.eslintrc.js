module.exports = {
  root: true,
  extends: [require.resolve('@ts-tf/lint-config')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
