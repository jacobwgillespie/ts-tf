import {Resource} from '../Resource'

export interface WafregionalWebAclArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafregionalWebAclAttributes {
  arn: string
  id: string
  metric_name: string
  name: string
}

export class WafregionalWebAcl extends Resource<WafregionalWebAclArguments, WafregionalWebAclAttributes> {
  kind = 'aws_wafregional_web_acl'
  _outputAttrNames = ['arn', 'id', 'metric_name', 'name'] as const
}
