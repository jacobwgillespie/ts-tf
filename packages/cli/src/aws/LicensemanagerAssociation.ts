import {Resource} from '../Resource'

export interface LicensemanagerAssociationArguments {
  id?: string
  license_configuration_arn: string
  resource_arn: string
}

export interface LicensemanagerAssociationAttributes {
  id: string
  license_configuration_arn: string
  resource_arn: string
}

export class LicensemanagerAssociation extends Resource<
  LicensemanagerAssociationArguments,
  LicensemanagerAssociationAttributes
> {
  _kind = 'aws_licensemanager_association'

  get id() {
    return this._attr('id')
  }

  get license_configuration_arn() {
    return this._attr('license_configuration_arn')
  }

  get resource_arn() {
    return this._attr('resource_arn')
  }
}
