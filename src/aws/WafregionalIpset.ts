import {Resource} from '../Resource'

export interface WafregionalIpsetArguments {
  id?: string
  name: string
}

export interface WafregionalIpsetAttributes {
  arn: string
  id: string
  name: string
}

export class WafregionalIpset extends Resource<WafregionalIpsetArguments, WafregionalIpsetAttributes> {
  kind = 'aws_wafregional_ipset'
  _outputAttrNames = ['arn', 'id', 'name'] as const
}
