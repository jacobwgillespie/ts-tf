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
  kind = 'aws_elasticsearch_domain_policy'
  _outputAttrNames = ['access_policies', 'domain_name', 'id'] as const
}
