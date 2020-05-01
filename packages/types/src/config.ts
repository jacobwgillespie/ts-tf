export type ConfigSchema = {
  readonly path: string
  readonly variables: Record<string, Variable>
  readonly outputs: Record<string, Output>
  readonly required_providers: Record<string, ProviderConstraints>
}

type Variable = {
  readonly name: string
  readonly type?: string
  readonly description?: string
  readonly default?: unknown
  readonly pos: Position
}

type Output = {
  readonly name: string
  readonly description?: string
  readonly pos: Position
}

type ProviderConstraints = {
  readonly version?: string
}

type Position = {
  readonly filename: string
  readonly line: number
}
