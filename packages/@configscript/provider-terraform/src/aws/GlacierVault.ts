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
  _kind = 'aws_glacier_vault'

  get access_policy() {
    return this._attr('access_policy')
  }

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get location() {
    return this._attr('location')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
