export function indent(count: number, source: string): string {
  return source.replace(/^(?!\s*$)/gm, ' '.repeat(count))
}
