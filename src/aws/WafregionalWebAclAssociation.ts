import {Resource} from '../Resource'

export interface WafregionalWebAclAssociationArguments {
  id?: string
  resource_arn: string
  web_acl_id: string
}

export interface WafregionalWebAclAssociationAttributes {
  id: string
  resource_arn: string
  web_acl_id: string
}

export class WafregionalWebAclAssociation extends Resource<
  WafregionalWebAclAssociationArguments,
  WafregionalWebAclAssociationAttributes
> {
  kind = 'aws_wafregional_web_acl_association'
  _outputAttrNames = ['id', 'resource_arn', 'web_acl_id'] as const
}
