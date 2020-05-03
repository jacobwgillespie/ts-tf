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
  _kind = 'aws_wafregional_web_acl_association'

  get id() {
    return this._attr('id')
  }

  get resource_arn() {
    return this._attr('resource_arn')
  }

  get web_acl_id() {
    return this._attr('web_acl_id')
  }
}
