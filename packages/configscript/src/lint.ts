import {CLIEngine} from 'eslint'
import lintConfig from '@configscript/lint-config'

// eslint-disable-next-line functional/functional-parameters,functional/no-return-void
export function lint(): void {
  const cli = new CLIEngine({
    baseConfig: lintConfig,
    cwd: process.cwd(),
    extensions: ['.js', '.ts'],
    resolvePluginsRelativeTo: require.resolve('@configscript/lint-config'),
    useEslintrc: false,
  })
  const report = cli.executeOnFiles(['.'])
  const formatter = cli.getFormatter('stylish')
  console.log(formatter(report.results))
}
