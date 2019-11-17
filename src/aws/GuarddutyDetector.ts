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
  kind = 'aws_guardduty_detector'
  _outputAttrNames = ['account_id', 'enable', 'finding_publishing_frequency', 'id'] as const
}
