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
  _kind = 'aws_gamelift_alias'

  get arn() {
    return this._attr('arn')
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
}
