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
  kind = 'aws_shield_protection'
  _outputAttrNames = ['id', 'name', 'resource_arn'] as const
}
