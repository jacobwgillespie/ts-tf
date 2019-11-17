import {Resource} from '../Resource'

export interface GlacierVaultArguments {
  access_policy?: string
  id?: string
  name: string
  tags?: {[key: string]: string}
}

export interface GlacierVaultAttributes {
  access_policy?: string
  arn: string
  id: string
  location: string
  name: string
  tags?: {[key: string]: string}
}

export class GlacierVault extends Resource<GlacierVaultArguments, GlacierVaultAttributes> {
  kind = 'aws_glacier_vault'
  _outputAttrNames = ['access_policy', 'arn', 'id', 'location', 'name', 'tags'] as const
}
