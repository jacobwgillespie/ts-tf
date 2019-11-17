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
  kind = 'aws_directory_service_conditional_forwarder'
  _outputAttrNames = ['directory_id', 'dns_ips', 'id', 'remote_domain_name'] as const
}
