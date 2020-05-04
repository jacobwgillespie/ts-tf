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
  _kind = 'aws_directory_service_directory'

  get access_url() {
    return this._attr('access_url')
  }

  get alias() {
    return this._attr('alias')
  }

  get description() {
    return this._attr('description')
  }

  get dns_ip_addresses() {
    return this._attr('dns_ip_addresses')
  }

  get edition() {
    return this._attr('edition')
  }

  get enable_sso() {
    return this._attr('enable_sso')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get password() {
    return this._attr('password')
  }

  get security_group_id() {
    return this._attr('security_group_id')
  }

  get short_name() {
    return this._attr('short_name')
  }

  get size() {
    return this._attr('size')
  }

  get tags() {
    return this._attr('tags')
  }

  get type() {
    return this._attr('type')
  }
}
