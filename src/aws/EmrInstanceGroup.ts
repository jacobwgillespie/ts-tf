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
  _kind = 'aws_emr_instance_group'

  get autoscaling_policy() {
    return this._attr('autoscaling_policy')
  }

  get bid_price() {
    return this._attr('bid_price')
  }

  get cluster_id() {
    return this._attr('cluster_id')
  }

  get ebs_optimized() {
    return this._attr('ebs_optimized')
  }

  get id() {
    return this._attr('id')
  }

  get instance_count() {
    return this._attr('instance_count')
  }

  get instance_type() {
    return this._attr('instance_type')
  }

  get name() {
    return this._attr('name')
  }

  get running_instance_count() {
    return this._attr('running_instance_count')
  }

  get status() {
    return this._attr('status')
  }
}
