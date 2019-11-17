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
  kind = 'aws_ec2_capacity_reservation'
  _outputAttrNames = [
    'availability_zone',
    'ebs_optimized',
    'end_date',
    'end_date_type',
    'ephemeral_storage',
    'id',
    'instance_count',
    'instance_match_criteria',
    'instance_platform',
    'instance_type',
    'tags',
    'tenancy',
  ] as const
}
