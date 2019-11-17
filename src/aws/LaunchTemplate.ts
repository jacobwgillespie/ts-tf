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
  kind = 'aws_launch_template'
  _outputAttrNames = [
    'arn',
    'default_version',
    'description',
    'disable_api_termination',
    'ebs_optimized',
    'id',
    'image_id',
    'instance_initiated_shutdown_behavior',
    'instance_type',
    'kernel_id',
    'key_name',
    'latest_version',
    'name',
    'name_prefix',
    'ram_disk_id',
    'security_group_names',
    'tags',
    'user_data',
    'vpc_security_group_ids',
  ] as const
}
