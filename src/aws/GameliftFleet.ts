import {Resource} from '../Resource'

export interface GameliftFleetArguments {
  build_id: string
  description?: string
  ec2_instance_type: string
  id?: string
  metric_groups?: Array<string>
  name: string
  new_game_session_protection_policy?: string
}

export interface GameliftFleetAttributes {
  arn: string
  build_id: string
  description?: string
  ec2_instance_type: string
  id: string
  log_paths: Array<string>
  metric_groups: Array<string>
  name: string
  new_game_session_protection_policy?: string
  operating_system: string
}

export class GameliftFleet extends Resource<GameliftFleetArguments, GameliftFleetAttributes> {
  kind = 'aws_gamelift_fleet'
  _outputAttrNames = [
    'arn',
    'build_id',
    'description',
    'ec2_instance_type',
    'id',
    'log_paths',
    'metric_groups',
    'name',
    'new_game_session_protection_policy',
    'operating_system',
  ] as const
}
