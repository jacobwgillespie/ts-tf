import {Resource} from '../Resource'

export interface WafIpsetArguments {
  id?: string
  name: string
}

export interface WafIpsetAttributes {
  arn: string
  id: string
  name: string
}

export class WafIpset extends Resource<WafIpsetArguments, WafIpsetAttributes> {
  kind = 'aws_waf_ipset'
  _outputAttrNames = ['arn', 'id', 'name'] as const
}
