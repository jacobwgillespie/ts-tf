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
  _kind = 'aws_guardduty_ipset'

  get activate() {
    return this._attr('activate')
  }

  get detector_id() {
    return this._attr('detector_id')
  }

  get format() {
    return this._attr('format')
  }

  get id() {
    return this._attr('id')
  }

  get location() {
    return this._attr('location')
  }

  get name() {
    return this._attr('name')
  }
}
