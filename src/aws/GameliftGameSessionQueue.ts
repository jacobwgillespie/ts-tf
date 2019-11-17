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
  kind = 'aws_gamelift_game_session_queue'
  _outputAttrNames = ['arn', 'destinations', 'id', 'name', 'timeout_in_seconds'] as const
}
