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
  kind = 'aws_gamelift_build'
  _outputAttrNames = ['id', 'name', 'operating_system', 'version'] as const
}
