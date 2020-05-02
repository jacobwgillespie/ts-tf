import {Resource} from '../Resource'

export interface DefaultNetworkAclArguments {
  default_network_acl_id: string
  id?: string
  subnet_ids?: Set<string>
  tags?: {[key: string]: string}
}

export interface DefaultNetworkAclAttributes {
  default_network_acl_id: string
  id: string
  owner_id: string
  subnet_ids?: Set<string>
  tags?: {[key: string]: string}
  vpc_id: string
}

export class DefaultNetworkAcl extends Resource<DefaultNetworkAclArguments, DefaultNetworkAclAttributes> {
  _kind = 'aws_default_network_acl'

  get default_network_acl_id() {
    return this._attr('default_network_acl_id')
  }

  get id() {
    return this._attr('id')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get subnet_ids() {
    return this._attr('subnet_ids')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
