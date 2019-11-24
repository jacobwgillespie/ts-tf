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
  _kind = 'aws_iot_policy'

  get arn() {
    return this._attr('arn')
  }

  get default_version_id() {
    return this._attr('default_version_id')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get policy() {
    return this._attr('policy')
  }
}
