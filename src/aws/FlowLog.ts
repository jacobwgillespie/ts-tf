import {Resource} from '../Resource'

export interface FlowLogArguments {
  eni_id?: string
  iam_role_arn?: string
  id?: string
  log_destination?: string
  log_destination_type?: string
  log_group_name?: string
  subnet_id?: string
  traffic_type: string
  vpc_id?: string
}

export interface FlowLogAttributes {
  eni_id?: string
  iam_role_arn?: string
  id: string
  log_destination: string
  log_destination_type?: string
  log_group_name: string
  subnet_id?: string
  traffic_type: string
  vpc_id?: string
}

export class FlowLog extends Resource<FlowLogArguments, FlowLogAttributes> {
  _kind = 'aws_flow_log'

  get eni_id() {
    return this._attr('eni_id')
  }

  get iam_role_arn() {
    return this._attr('iam_role_arn')
  }

  get id() {
    return this._attr('id')
  }

  get log_destination() {
    return this._attr('log_destination')
  }

  get log_destination_type() {
    return this._attr('log_destination_type')
  }

  get log_group_name() {
    return this._attr('log_group_name')
  }

  get subnet_id() {
    return this._attr('subnet_id')
  }

  get traffic_type() {
    return this._attr('traffic_type')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
