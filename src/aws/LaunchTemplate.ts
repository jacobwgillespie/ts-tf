import {Resource} from '../Resource'

export interface LaunchTemplateArguments {
  description?: string
  disable_api_termination?: boolean
  ebs_optimized?: string
  id?: string
  image_id?: string
  instance_initiated_shutdown_behavior?: string
  instance_type?: string
  kernel_id?: string
  key_name?: string
  name?: string
  name_prefix?: string
  ram_disk_id?: string
  security_group_names?: Set<string>
  tags?: {[key: string]: string}
  user_data?: string
  vpc_security_group_ids?: Set<string>
}

export interface LaunchTemplateAttributes {
  arn: string
  default_version: number
  description?: string
  disable_api_termination?: boolean
  ebs_optimized?: string
  id: string
  image_id?: string
  instance_initiated_shutdown_behavior?: string
  instance_type?: string
  kernel_id?: string
  key_name?: string
  latest_version: number
  name: string
  name_prefix?: string
  ram_disk_id?: string
  security_group_names?: Set<string>
  tags?: {[key: string]: string}
  user_data?: string
  vpc_security_group_ids?: Set<string>
}

export class LaunchTemplate extends Resource<LaunchTemplateArguments, LaunchTemplateAttributes> {
  _kind = 'aws_launch_template'

  get arn() {
    return this._attr('arn')
  }

  get default_version() {
    return this._attr('default_version')
  }

  get description() {
    return this._attr('description')
  }

  get disable_api_termination() {
    return this._attr('disable_api_termination')
  }

  get ebs_optimized() {
    return this._attr('ebs_optimized')
  }

  get id() {
    return this._attr('id')
  }

  get image_id() {
    return this._attr('image_id')
  }

  get instance_initiated_shutdown_behavior() {
    return this._attr('instance_initiated_shutdown_behavior')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get kernel_id() {
    return this._attr('kernel_id')
  }

  get key_name() {
    return this._attr('key_name')
  }

  get latest_version() {
    return this._attr('latest_version')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get ram_disk_id() {
    return this._attr('ram_disk_id')
  }

  get security_group_names() {
    return this._attr('security_group_names')
  }

  get tags() {
    return this._attr('tags')
  }

  get user_data() {
    return this._attr('user_data')
  }

  get vpc_security_group_ids() {
    return this._attr('vpc_security_group_ids')
  }
}
