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
  _kind = 'aws_mq_broker'

  get apply_immediately() {
    return this._attr('apply_immediately')
  }

  get arn() {
    return this._attr('arn')
  }

  get auto_minor_version_upgrade() {
    return this._attr('auto_minor_version_upgrade')
  }

  get broker_name() {
    return this._attr('broker_name')
  }

  get deployment_mode() {
    return this._attr('deployment_mode')
  }

  get engine_type() {
    return this._attr('engine_type')
  }

  get engine_version() {
    return this._attr('engine_version')
  }

  get host_instance_type() {
    return this._attr('host_instance_type')
  }

  get id() {
    return this._attr('id')
  }

  get instances() {
    return this._attr('instances')
  }

  get publicly_accessible() {
    return this._attr('publicly_accessible')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }
}
