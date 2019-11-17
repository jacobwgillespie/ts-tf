import {Resource} from '../Resource'

export interface MqBrokerArguments {
  apply_immediately?: boolean
  auto_minor_version_upgrade?: boolean
  broker_name: string
  deployment_mode?: string
  engine_type: string
  engine_version: string
  host_instance_type: string
  id?: string
  publicly_accessible?: boolean
  security_groups: Set<string>
  subnet_ids?: Set<string>
  tags?: {[key: string]: string}
}

export interface MqBrokerAttributes {
  apply_immediately?: boolean
  arn: string
  auto_minor_version_upgrade?: boolean
  broker_name: string
  deployment_mode?: string
  engine_type: string
  engine_version: string
  host_instance_type: string
  id: string
  instances: Array<{console_url: string; endpoints: Array<string>; ip_address: string}>
  publicly_accessible?: boolean
  security_groups: Set<string>
  subnet_ids: Set<string>
  tags?: {[key: string]: string}
}

export class MqBroker extends Resource<MqBrokerArguments, MqBrokerAttributes> {
  kind = 'aws_mq_broker'
  _outputAttrNames = [
    'apply_immediately',
    'arn',
    'auto_minor_version_upgrade',
    'broker_name',
    'deployment_mode',
    'engine_type',
    'engine_version',
    'host_instance_type',
    'id',
    'instances',
    'publicly_accessible',
    'security_groups',
    'subnet_ids',
    'tags',
  ] as const
}
