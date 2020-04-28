export interface ConfigSchema {
  path: string
  variables: Record<string, Variable>
  outputs: Record<string, Output>
  required_providers: Record<string, ProviderConstraints>
}

interface Variable {
  name: string
  type?: string
  description?: string
  default?: unknown
  pos: Position
}

interface Output {
  name: string
  description?: string
  pos: Position
}

interface ProviderConstraints {
  version?: string
}

interface Position {
  filename: string
  line: number
}
