import {Resource} from '../Resource'

export interface EmrInstanceGroupArguments {
  autoscaling_policy?: string
  bid_price?: string
  cluster_id: string
  ebs_optimized?: boolean
  id?: string
  instance_count?: number
  instance_type: string
  name?: string
}

export interface EmrInstanceGroupAttributes {
  autoscaling_policy?: string
  bid_price?: string
  cluster_id: string
  ebs_optimized?: boolean
  id: string
  instance_count?: number
  instance_type: string
  name?: string
  running_instance_count: number
  status: string
}

export class EmrInstanceGroup extends Resource<EmrInstanceGroupArguments, EmrInstanceGroupAttributes> {
  kind = 'aws_emr_instance_group'
  _outputAttrNames = [
    'autoscaling_policy',
    'bid_price',
    'cluster_id',
    'ebs_optimized',
    'id',
    'instance_count',
    'instance_type',
    'name',
    'running_instance_count',
    'status',
  ] as const
}
