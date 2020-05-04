import {Resource} from '../Resource'

export interface WorklinkWebsiteCertificateAuthorityAssociationArguments {
  certificate: string
  display_name?: string
  fleet_arn: string
  id?: string
}

export interface WorklinkWebsiteCertificateAuthorityAssociationAttributes {
  certificate: string
  display_name?: string
  fleet_arn: string
  id: string
  website_ca_id: string
}

export class WorklinkWebsiteCertificateAuthorityAssociation extends Resource<
  WorklinkWebsiteCertificateAuthorityAssociationArguments,
  WorklinkWebsiteCertificateAuthorityAssociationAttributes
> {
  _kind = 'aws_worklink_website_certificate_authority_association'

  get certificate() {
    return this._attr('certificate')
  }

  get display_name() {
    return this._attr('display_name')
  }

  get fleet_arn() {
    return this._attr('fleet_arn')
  }

  get id() {
    return this._attr('id')
  }

  get website_ca_id() {
    return this._attr('website_ca_id')
  }
}
