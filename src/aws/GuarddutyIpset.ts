import {Resource} from '../Resource'

export interface GuarddutyIpsetArguments {
  activate: boolean
  detector_id: string
  format: string
  id?: string
  location: string
  name: string
}

export interface GuarddutyIpsetAttributes {
  activate: boolean
  detector_id: string
  format: string
  id: string
  location: string
  name: string
}

export class GuarddutyIpset extends Resource<GuarddutyIpsetArguments, GuarddutyIpsetAttributes> {
  kind = 'aws_guardduty_ipset'
  _outputAttrNames = ['activate', 'detector_id', 'format', 'id', 'location', 'name'] as const
}
