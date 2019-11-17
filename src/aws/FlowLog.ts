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
  kind = 'aws_flow_log'
  _outputAttrNames = [
    'eni_id',
    'iam_role_arn',
    'id',
    'log_destination',
    'log_destination_type',
    'log_group_name',
    'subnet_id',
    'traffic_type',
    'vpc_id',
  ] as const
}
