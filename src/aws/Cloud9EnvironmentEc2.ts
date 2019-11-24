import {Resource} from '../Resource'

export interface Cloud9EnvironmentEc2Arguments {
  automatic_stop_time_minutes?: number
  description?: string
  id?: string
  instance_type: string
  name: string
  owner_arn?: string
  subnet_id?: string
}

export interface Cloud9EnvironmentEc2Attributes {
  arn: string
  automatic_stop_time_minutes?: number
  description?: string
  id: string
  instance_type: string
  name: string
  owner_arn: string
  subnet_id?: string
  type: string
}

export class Cloud9EnvironmentEc2 extends Resource<Cloud9EnvironmentEc2Arguments, Cloud9EnvironmentEc2Attributes> {
  _kind = 'aws_cloud9_environment_ec2'

  get arn() {
    return this._attr('arn')
  }

  get automatic_stop_time_minutes() {
    return this._attr('automatic_stop_time_minutes')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get name() {
    return this._attr('name')
  }

  get owner_arn() {
    return this._attr('owner_arn')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get type() {
    return this._attr('type')
  }
}
