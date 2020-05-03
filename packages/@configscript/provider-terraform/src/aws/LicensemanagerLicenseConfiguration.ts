import {Resource} from '../Resource'

export interface LicensemanagerLicenseConfigurationArguments {
  description?: string
  id?: string
  license_count?: number
  license_count_hard_limit?: boolean
  license_counting_type: string
  license_rules?: Array<string>
  name: string
  tags?: {[key: string]: string}
}

export interface LicensemanagerLicenseConfigurationAttributes {
  description?: string
  id: string
  license_count?: number
  license_count_hard_limit?: boolean
  license_counting_type: string
  license_rules?: Array<string>
  name: string
  tags?: {[key: string]: string}
}

export class LicensemanagerLicenseConfiguration extends Resource<
  LicensemanagerLicenseConfigurationArguments,
  LicensemanagerLicenseConfigurationAttributes
> {
  _kind = 'aws_licensemanager_license_configuration'

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get license_count() {
    return this._attr('license_count')
  }

  get license_count_hard_limit() {
    return this._attr('license_count_hard_limit')
  }

  get license_counting_type() {
    return this._attr('license_counting_type')
  }

  get license_rules() {
    return this._attr('license_rules')
  }

  get name() {
    return this._attr('name')
  }

  get tags() {
    return this._attr('tags')
  }
}
