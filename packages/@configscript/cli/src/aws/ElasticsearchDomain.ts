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
  _kind = 'aws_elasticsearch_domain'

  get access_policies() {
    return this._attr('access_policies')
  }

  get advanced_options() {
    return this._attr('advanced_options')
  }

  get arn() {
    return this._attr('arn')
  }

  get domain_id() {
    return this._attr('domain_id')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get elasticsearch_version() {
    return this._attr('elasticsearch_version')
  }

  get endpoint() {
    return this._attr('endpoint')
  }

  get id() {
    return this._attr('id')
  }

  get kibana_endpoint() {
    return this._attr('kibana_endpoint')
  }

  get tags() {
    return this._attr('tags')
  }
}
