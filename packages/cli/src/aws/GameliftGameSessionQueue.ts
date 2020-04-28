import {Resource} from '../Resource'

export interface GameliftGameSessionQueueArguments {
  destinations?: Array<string>
  id?: string
  name: string
  timeout_in_seconds?: number
}

export interface GameliftGameSessionQueueAttributes {
  arn: string
  destinations?: Array<string>
  id: string
  name: string
  timeout_in_seconds?: number
}

export class GameliftGameSessionQueue extends Resource<
  GameliftGameSessionQueueArguments,
  GameliftGameSessionQueueAttributes
> {
  _kind = 'aws_gamelift_game_session_queue'

  get arn() {
    return this._attr('arn')
  }

  get destinations() {
    return this._attr('destinations')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get timeout_in_seconds() {
    return this._attr('timeout_in_seconds')
  }
}
