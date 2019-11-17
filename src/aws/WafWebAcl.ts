import {Resource} from '../Resource'

export interface WafWebAclArguments {
  id?: string
  metric_name: string
  name: string
}

export interface WafWebAclAttributes {
  arn: string
  id: string
  metric_name: string
  name: string
}

export class WafWebAcl extends Resource<WafWebAclArguments, WafWebAclAttributes> {
  kind = 'aws_waf_web_acl'
  _outputAttrNames = ['arn', 'id', 'metric_name', 'name'] as const
}
