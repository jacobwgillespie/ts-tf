import {Resource} from '../Resource'

export interface IotPolicyArguments {
  id?: string
  name: string
  policy: string
}

export interface IotPolicyAttributes {
  arn: string
  default_version_id: string
  id: string
  name: string
  policy: string
}

export class IotPolicy extends Resource<IotPolicyArguments, IotPolicyAttributes> {
  kind = 'aws_iot_policy'
  _outputAttrNames = ['arn', 'default_version_id', 'id', 'name', 'policy'] as const
}
