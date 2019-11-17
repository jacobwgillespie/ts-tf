import {Resource} from '../Resource'

export interface ElasticsearchDomainArguments {
  access_policies?: string
  advanced_options?: {[key: string]: string}
  domain_name: string
  elasticsearch_version?: string
  id?: string
  tags?: {[key: string]: string}
}

export interface ElasticsearchDomainAttributes {
  access_policies: string
  advanced_options: {[key: string]: string}
  arn: string
  domain_id: string
  domain_name: string
  elasticsearch_version?: string
  endpoint: string
  id: string
  kibana_endpoint: string
  tags?: {[key: string]: string}
}

export class ElasticsearchDomain extends Resource<ElasticsearchDomainArguments, ElasticsearchDomainAttributes> {
  kind = 'aws_elasticsearch_domain'
  _outputAttrNames = [
    'access_policies',
    'advanced_options',
    'arn',
    'domain_id',
    'domain_name',
    'elasticsearch_version',
    'endpoint',
    'id',
    'kibana_endpoint',
    'tags',
  ] as const
}
