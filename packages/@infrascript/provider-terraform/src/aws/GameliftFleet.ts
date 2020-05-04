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
  _kind = 'aws_gamelift_fleet'

  get arn() {
    return this._attr('arn')
  }

  get build_id() {
    return this._attr('build_id')
  }

  get description() {
    return this._attr('description')
  }

  get ec2_instance_type() {
    return this._attr('ec2_instance_type')
  }

  get id() {
    return this._attr('id')
  }

  get log_paths() {
    return this._attr('log_paths')
  }

  get metric_groups() {
    return this._attr('metric_groups')
  }

  get name() {
    return this._attr('name')
  }

  get new_game_session_protection_policy() {
    return this._attr('new_game_session_protection_policy')
  }

  get operating_system() {
    return this._attr('operating_system')
  }
}
