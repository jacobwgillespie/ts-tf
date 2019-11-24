import {Resource} from '../Resource'

export interface DirectoryServiceConditionalForwarderArguments {
  directory_id: string
  dns_ips: Array<string>
  id?: string
  remote_domain_name: string
}

export interface DirectoryServiceConditionalForwarderAttributes {
  directory_id: string
  dns_ips: Array<string>
  id: string
  remote_domain_name: string
}

export class DirectoryServiceConditionalForwarder extends Resource<
  DirectoryServiceConditionalForwarderArguments,
  DirectoryServiceConditionalForwarderAttributes
> {
  _kind = 'aws_directory_service_conditional_forwarder'

  get directory_id() {
    return this._attr('directory_id')
  }

  get dns_ips() {
    return this._attr('dns_ips')
  }

  get id() {
    return this._attr('id')
  }

  get remote_domain_name() {
    return this._attr('remote_domain_name')
  }
}
