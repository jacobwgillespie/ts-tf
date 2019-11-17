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
  kind = 'aws_route53_zone_association'
  _outputAttrNames = ['id', 'vpc_id', 'vpc_region', 'zone_id'] as const
}
