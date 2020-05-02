import {Resource} from '../Resource'

export interface InternetGatewayArguments {
  id?: string
  tags?: {[key: string]: string}
  vpc_id?: string
}

export interface InternetGatewayAttributes {
  id: string
  owner_id: string
  tags?: {[key: string]: string}
  vpc_id?: string
}

export class InternetGateway extends Resource<InternetGatewayArguments, InternetGatewayAttributes> {
  _kind = 'aws_internet_gateway'

  get id() {
    return this._attr('id')
  }

  get owner_id() {
    return this._attr('owner_id')
  }

  get tags() {
    return this._attr('tags')
  }

  get vpc_id() {
    return this._attr('vpc_id')
  }
}
