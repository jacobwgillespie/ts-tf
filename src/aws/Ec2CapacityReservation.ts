import {Resource} from '../Resource'

export interface Ec2CapacityReservationArguments {
  availability_zone: string
  ebs_optimized?: boolean
  end_date?: string
  end_date_type?: string
  ephemeral_storage?: boolean
  id?: string
  instance_count: number
  instance_match_criteria?: string
  instance_platform: string
  instance_type: string
  tags?: {[key: string]: string}
  tenancy?: string
}

export interface Ec2CapacityReservationAttributes {
  availability_zone: string
  ebs_optimized?: boolean
  end_date?: string
  end_date_type?: string
  ephemeral_storage?: boolean
  id: string
  instance_count: number
  instance_match_criteria?: string
  instance_platform: string
  instance_type: string
  tags?: {[key: string]: string}
  tenancy?: string
}

export class Ec2CapacityReservation extends Resource<
  Ec2CapacityReservationArguments,
  Ec2CapacityReservationAttributes
> {
  _kind = 'aws_ec2_capacity_reservation'

  get availability_zone() {
    return this._attr('availability_zone')
  }

  get ebs_optimized() {
    return this._attr('ebs_optimized')
  }

  get end_date() {
    return this._attr('end_date')
  }

  get end_date_type() {
    return this._attr('end_date_type')
  }

  get ephemeral_storage() {
    return this._attr('ephemeral_storage')
  }

  get id() {
    return this._attr('id')
  }

  get instance_count() {
    return this._attr('instance_count')
  }

  get instance_match_criteria() {
    return this._attr('instance_match_criteria')
  }

  get instance_platform() {
    return this._attr('instance_platform')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get tags() {
    return this._attr('tags')
  }

  get tenancy() {
    return this._attr('tenancy')
  }
}
