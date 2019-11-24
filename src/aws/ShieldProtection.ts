import {Resource} from '../Resource'

export interface ShieldProtectionArguments {
  id?: string
  name: string
  resource_arn: string
}

export interface ShieldProtectionAttributes {
  id: string
  name: string
  resource_arn: string
}

export class ShieldProtection extends Resource<ShieldProtectionArguments, ShieldProtectionAttributes> {
  _kind = 'aws_shield_protection'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get resource_arn() {
    return this._attr('resource_arn')
  }
}
