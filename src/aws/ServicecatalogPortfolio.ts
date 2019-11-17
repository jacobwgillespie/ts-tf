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
  kind = 'aws_servicecatalog_portfolio'
  _outputAttrNames = ['arn', 'created_time', 'description', 'id', 'name', 'provider_name', 'tags'] as const
}
