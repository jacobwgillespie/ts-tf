import {Resource} from '../Resource'

export interface CloudfrontDistributionArguments {
  aliases?: Set<string>
  comment?: string
  default_root_object?: string
  enabled: boolean
  http_version?: string
  id?: string
  is_ipv6_enabled?: boolean
  price_class?: string
  retain_on_delete?: boolean
  tags?: {[key: string]: string}
  wait_for_deployment?: boolean
  web_acl_id?: string
}

export interface CloudfrontDistributionAttributes {
  active_trusted_signers: {[key: string]: string}
  aliases?: Set<string>
  arn: string
  caller_reference: string
  comment?: string
  default_root_object?: string
  domain_name: string
  enabled: boolean
  etag: string
  hosted_zone_id: string
  http_version?: string
  id: string
  in_progress_validation_batches: number
  is_ipv6_enabled?: boolean
  last_modified_time: string
  price_class?: string
  retain_on_delete?: boolean
  status: string
  tags?: {[key: string]: string}
  wait_for_deployment?: boolean
  web_acl_id?: string
}

export class CloudfrontDistribution extends Resource<
  CloudfrontDistributionArguments,
  CloudfrontDistributionAttributes
> {
  kind = 'aws_cloudfront_distribution'
  _outputAttrNames = [
    'active_trusted_signers',
    'aliases',
    'arn',
    'caller_reference',
    'comment',
    'default_root_object',
    'domain_name',
    'enabled',
    'etag',
    'hosted_zone_id',
    'http_version',
    'id',
    'in_progress_validation_batches',
    'is_ipv6_enabled',
    'last_modified_time',
    'price_class',
    'retain_on_delete',
    'status',
    'tags',
    'wait_for_deployment',
    'web_acl_id',
  ] as const
}
