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
  _kind = 'aws_cloudfront_distribution'

  get active_trusted_signers() {
    return this._attr('active_trusted_signers')
  }

  get aliases() {
    return this._attr('aliases')
  }

  get arn() {
    return this._attr('arn')
  }

  get caller_reference() {
    return this._attr('caller_reference')
  }

  get comment() {
    return this._attr('comment')
  }

  get default_root_object() {
    return this._attr('default_root_object')
  }

  get domain_name() {
    return this._attr('domain_name')
  }

  get enabled() {
    return this._attr('enabled')
  }

  get etag() {
    return this._attr('etag')
  }

  get hosted_zone_id() {
    return this._attr('hosted_zone_id')
  }

  get http_version() {
    return this._attr('http_version')
  }

  get id() {
    return this._attr('id')
  }

  get in_progress_validation_batches() {
    return this._attr('in_progress_validation_batches')
  }

  get is_ipv6_enabled() {
    return this._attr('is_ipv6_enabled')
  }

  get last_modified_time() {
    return this._attr('last_modified_time')
  }

  get price_class() {
    return this._attr('price_class')
  }

  get retain_on_delete() {
    return this._attr('retain_on_delete')
  }

  get status() {
    return this._attr('status')
  }

  get tags() {
    return this._attr('tags')
  }

  get wait_for_deployment() {
    return this._attr('wait_for_deployment')
  }

  get web_acl_id() {
    return this._attr('web_acl_id')
  }
}
