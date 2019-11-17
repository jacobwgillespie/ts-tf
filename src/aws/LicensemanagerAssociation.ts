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
  kind = 'aws_licensemanager_association'
  _outputAttrNames = ['id', 'license_configuration_arn', 'resource_arn'] as const
}
