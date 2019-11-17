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
  kind = 'aws_licensemanager_license_configuration'
  _outputAttrNames = [
    'description',
    'id',
    'license_count',
    'license_count_hard_limit',
    'license_counting_type',
    'license_rules',
    'name',
    'tags',
  ] as const
}
