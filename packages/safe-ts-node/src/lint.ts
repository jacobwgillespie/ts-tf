import {CLIEngine} from 'eslint'

export function lint() {
  const cli = new CLIEngine({
    baseConfig: require('@ts-tf/lint-config'),
    cwd: process.cwd(),
    extensions: ['.js', '.ts'],
    resolvePluginsRelativeTo: require.resolve('@ts-tf/lint-config'),
    useEslintrc: false,
  })
  const report = cli.executeOnFiles(['.'])
  const formatter = cli.getFormatter('stylish')
  console.log(formatter(report.results))
}
