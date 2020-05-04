import {Resource} from '../Resource'

export interface ElasticsearchDomainPolicyArguments {
  access_policies: string
  domain_name: string
  id?: string
}

export interface ElasticsearchDomainPolicyAttributes {
  access_policies: string
  domain_name: string
  id: string
}

export class ElasticsearchDomainPolicy extends Resource<
  ElasticsearchDomainPolicyArguments,
  ElasticsearchDomainPolicyAttributes
> {
  _kind = 'aws_elasticsearch_domain_policy'

  get access_policies() {
    return this._attr('access_policies')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get id() {
    return this._attr('id')
  }
}
