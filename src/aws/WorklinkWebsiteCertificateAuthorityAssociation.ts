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
  kind = 'aws_worklink_website_certificate_authority_association'
  _outputAttrNames = ['certificate', 'display_name', 'fleet_arn', 'id', 'website_ca_id'] as const
}
