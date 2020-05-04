import {Resource} from '../Resource'

export interface Route53RecordArguments {
  allow_overwrite?: boolean
  health_check_id?: string
  id?: string
  multivalue_answer_routing_policy?: boolean
  name: string
  records?: Set<string>
  set_identifier?: string
  ttl?: number
  type: string
  zone_id: string
}

export interface Route53RecordAttributes {
  allow_overwrite: boolean
  fqdn: string
  health_check_id?: string
  id: string
  multivalue_answer_routing_policy?: boolean
  name: string
  records?: Set<string>
  set_identifier?: string
  ttl?: number
  type: string
  zone_id: string
}

export class Route53Record extends Resource<Route53RecordArguments, Route53RecordAttributes> {
  _kind = 'aws_route53_record'

  get allow_overwrite() {
    return this._attr('allow_overwrite')
  }

  get fqdn() {
    return this._attr('fqdn')
  }

  get health_check_id() {
    return this._attr('health_check_id')
  }

  get id() {
    return this._attr('id')
  }

  get multivalue_answer_routing_policy() {
    return this._attr('multivalue_answer_routing_policy')
  }

  get name() {
    return this._attr('name')
  }

  get records() {
    return this._attr('records')
  }

  get set_identifier() {
    return this._attr('set_identifier')
  }

  get ttl() {
    return this._attr('ttl')
  }

  get type() {
    return this._attr('type')
  }

  get zone_id() {
    return this._attr('zone_id')
  }
}
