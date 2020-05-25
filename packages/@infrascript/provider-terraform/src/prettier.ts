import prettierConfig from '@infrascript/config-prettier'
import prettier from 'prettier'

export function formatTypeScript(code: string): string {
  return prettier.format(code, {...prettierConfig, parser: 'typescript'})
}
