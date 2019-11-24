import {Resource} from '../Resource'

export interface GameliftBuildArguments {
  id?: string
  name: string
  operating_system: string
  version?: string
}

export interface GameliftBuildAttributes {
  id: string
  name: string
  operating_system: string
  version?: string
}

export class GameliftBuild extends Resource<GameliftBuildArguments, GameliftBuildAttributes> {
  _kind = 'aws_gamelift_build'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get operating_system() {
    return this._attr('operating_system')
  }

  get version() {
    return this._attr('version')
  }
}
