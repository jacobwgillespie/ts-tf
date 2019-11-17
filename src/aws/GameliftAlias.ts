import {Resource} from '../Resource'

export interface GameliftAliasArguments {
  description?: string
  id?: string
  name: string
}

export interface GameliftAliasAttributes {
  arn: string
  description?: string
  id: string
  name: string
}

export class GameliftAlias extends Resource<GameliftAliasArguments, GameliftAliasAttributes> {
  kind = 'aws_gamelift_alias'
  _outputAttrNames = ['arn', 'description', 'id', 'name'] as const
}
