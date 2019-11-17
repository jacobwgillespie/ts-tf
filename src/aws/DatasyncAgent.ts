import {Resource} from '../Resource'

export interface DatasyncAgentArguments {
  activation_key?: string
  id?: string
  ip_address?: string
  name?: string
  tags?: {[key: string]: string}
}

export interface DatasyncAgentAttributes {
  activation_key: string
  arn: string
  id: string
  ip_address: string
  name?: string
  tags?: {[key: string]: string}
}

export class DatasyncAgent extends Resource<DatasyncAgentArguments, DatasyncAgentAttributes> {
  kind = 'aws_datasync_agent'
  _outputAttrNames = ['activation_key', 'arn', 'id', 'ip_address', 'name', 'tags'] as const
}
