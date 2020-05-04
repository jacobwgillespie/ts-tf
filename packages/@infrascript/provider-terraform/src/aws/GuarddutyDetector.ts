import {Resource} from '../Resource'

export interface GuarddutyDetectorArguments {
  enable?: boolean
  finding_publishing_frequency?: string
  id?: string
}

export interface GuarddutyDetectorAttributes {
  account_id: string
  enable?: boolean
  finding_publishing_frequency: string
  id: string
}

export class GuarddutyDetector extends Resource<GuarddutyDetectorArguments, GuarddutyDetectorAttributes> {
  _kind = 'aws_guardduty_detector'

  get account_id() {
    return this._attr('account_id')
  }

  get enable() {
    return this._attr('enable')
  }

  get finding_publishing_frequency() {
    return this._attr('finding_publishing_frequency')
  }

  get id() {
    return this._attr('id')
  }
}
