import {CLIEngine} from 'eslint'

export function lint() {
  const cli = new CLIEngine({
    baseConfig: require('@configscript/lint-config'),
    cwd: process.cwd(),
    extensions: ['.js', '.ts'],
    resolvePluginsRelativeTo: require.resolve('@configscript/lint-config'),
    useEslintrc: false,
  })
  const report = cli.executeOnFiles(['.'])
  const formatter = cli.getFormatter('stylish')
  console.log(formatter(report.results))
}
