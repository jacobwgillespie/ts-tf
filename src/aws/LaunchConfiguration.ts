import {Resource} from '../Resource'

export interface LaunchConfigurationArguments {
  associate_public_ip_address?: boolean
  ebs_optimized?: boolean
  enable_monitoring?: boolean
  iam_instance_profile?: string
  id?: string
  image_id: string
  instance_type: string
  key_name?: string
  name?: string
  name_prefix?: string
  placement_tenancy?: string
  security_groups?: Set<string>
  spot_price?: string
  user_data?: string
  user_data_base64?: string
  vpc_classic_link_id?: string
  vpc_classic_link_security_groups?: Set<string>
}

export interface LaunchConfigurationAttributes {
  associate_public_ip_address?: boolean
  ebs_optimized: boolean
  enable_monitoring?: boolean
  iam_instance_profile?: string
  id: string
  image_id: string
  instance_type: string
  key_name: string
  name: string
  name_prefix?: string
  placement_tenancy?: string
  security_groups?: Set<string>
  spot_price?: string
  user_data?: string
  user_data_base64?: string
  vpc_classic_link_id?: string
  vpc_classic_link_security_groups?: Set<string>
}

export class LaunchConfiguration extends Resource<LaunchConfigurationArguments, LaunchConfigurationAttributes> {
  kind = 'aws_launch_configuration'
  _outputAttrNames = [
    'associate_public_ip_address',
    'ebs_optimized',
    'enable_monitoring',
    'iam_instance_profile',
    'id',
    'image_id',
    'instance_type',
    'key_name',
    'name',
    'name_prefix',
    'placement_tenancy',
    'security_groups',
    'spot_price',
    'user_data',
    'user_data_base64',
    'vpc_classic_link_id',
    'vpc_classic_link_security_groups',
  ] as const
}
