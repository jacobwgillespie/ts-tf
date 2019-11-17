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
  kind = 'aws_cloud9_environment_ec2'
  _outputAttrNames = [
    'arn',
    'automatic_stop_time_minutes',
    'description',
    'id',
    'instance_type',
    'name',
    'owner_arn',
    'subnet_id',
    'type',
  ] as const
}
