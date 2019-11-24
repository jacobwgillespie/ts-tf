import {Resource} from '../Resource'

export interface Route53ZoneAssociationArguments {
  id?: string
  vpc_id: string
  vpc_region?: string
  zone_id: string
}

export interface Route53ZoneAssociationAttributes {
  id: string
  vpc_id: string
  vpc_region: string
  zone_id: string
}

export class Route53ZoneAssociation extends Resource<
  Route53ZoneAssociationArguments,
  Route53ZoneAssociationAttributes
> {
  _kind = 'aws_route53_zone_association'

  get id() {
    return this._attr('id')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }

  get vpc_region() {
    return this._attr('vpc_region')
  }

  get zone_id() {
    return this._attr('zone_id')
  }
}
