import {Resource} from '../Resource'

export interface DirectoryServiceDirectoryArguments {
  alias?: string
  description?: string
  edition?: string
  enable_sso?: boolean
  id?: string
  name: string
  password: string
  short_name?: string
  size?: string
  tags?: {[key: string]: string}
  type?: string
}

export interface DirectoryServiceDirectoryAttributes {
  access_url: string
  alias: string
  description?: string
  dns_ip_addresses: Set<string>
  edition: string
  enable_sso?: boolean
  id: string
  name: string
  password: string
  security_group_id: string
  short_name: string
  size: string
  tags?: {[key: string]: string}
  type?: string
}

export class DirectoryServiceDirectory extends Resource<
  DirectoryServiceDirectoryArguments,
  DirectoryServiceDirectoryAttributes
> {
  kind = 'aws_directory_service_directory'
  _outputAttrNames = [
    'access_url',
    'alias',
    'description',
    'dns_ip_addresses',
    'edition',
    'enable_sso',
    'id',
    'name',
    'password',
    'security_group_id',
    'short_name',
    'size',
    'tags',
    'type',
  ] as const
}
