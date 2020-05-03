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
  _kind = 'aws_launch_configuration'

  get associate_public_ip_address() {
    return this._attr('associate_public_ip_address')
  }

  get ebs_optimized() {
    return this._attr('ebs_optimized')
  }

  get enable_monitoring() {
    return this._attr('enable_monitoring')
  }

  get iam_instance_profile() {
    return this._attr('iam_instance_profile')
  }

  get id() {
    return this._attr('id')
  }

  get image_id() {
    return this._attr('image_id')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get key_name() {
    return this._attr('key_name')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get placement_tenancy() {
    return this._attr('placement_tenancy')
  }

  get security_groups() {
    return this._attr('security_groups')
  }

  get spot_price() {
    return this._attr('spot_price')
  }

  get user_data() {
    return this._attr('user_data')
  }

  get user_data_base64() {
    return this._attr('user_data_base64')
  }

  get vpc_classic_link_id() {
    return this._attr('vpc_classic_link_id')
  }

  get vpc_classic_link_security_groups() {
    return this._attr('vpc_classic_link_security_groups')
  }
}
