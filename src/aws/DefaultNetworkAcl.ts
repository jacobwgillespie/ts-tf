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
  kind = 'aws_default_network_acl'
  _outputAttrNames = ['default_network_acl_id', 'id', 'owner_id', 'subnet_ids', 'tags', 'vpc_id'] as const
}
