import {Resource} from '../Resource'

export interface GuarddutyThreatintelsetArguments {
  activate: boolean
  detector_id: string
  format: string
  id?: string
  location: string
  name: string
}

export interface GuarddutyThreatintelsetAttributes {
  activate: boolean
  detector_id: string
  format: string
  id: string
  location: string
  name: string
}

export class GuarddutyThreatintelset extends Resource<
  GuarddutyThreatintelsetArguments,
  GuarddutyThreatintelsetAttributes
> {
  kind = 'aws_guardduty_threatintelset'
  _outputAttrNames = ['activate', 'detector_id', 'format', 'id', 'location', 'name'] as const
}
