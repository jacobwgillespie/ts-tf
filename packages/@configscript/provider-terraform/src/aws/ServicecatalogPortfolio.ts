import {Resource} from '../Resource'

export interface ServicecatalogPortfolioArguments {
  description?: string
  id?: string
  name: string
  provider_name?: string
  tags?: {[key: string]: string}
}

export interface ServicecatalogPortfolioAttributes {
  arn: string
  created_time: string
  description: string
  id: string
  name: string
  provider_name?: string
  tags?: {[key: string]: string}
}

export class ServicecatalogPortfolio extends Resource<
  ServicecatalogPortfolioArguments,
  ServicecatalogPortfolioAttributes
> {
  _kind = 'aws_servicecatalog_portfolio'

  get arn() {
    return this._attr('arn')
  }

  get created_time() {
    return this._attr('created_time')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get provider_name() {
    return this._attr('provider_name')
  }

  get tags() {
    return this._attr('tags')
  }
}
