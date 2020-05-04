export interface ConfigSchema {
  readonly path: string
  readonly variables: Record<string, Variable>
  readonly outputs: Record<string, Output>
  readonly required_providers: Record<string, ProviderConstraints>
}

interface Variable {
  readonly name: string
  readonly type?: string
  readonly description?: string
  readonly default?: unknown
  readonly pos: Position
}

interface Output {
  readonly name: string
  readonly description?: string
  readonly pos: Position
}

interface ProviderConstraints {
  readonly version?: string
}

interface Position {
  readonly filename: string
  readonly line: number
}
