import {Resource} from '../Resource'

export interface IamSamlProviderArguments {
  id?: string
  name: string
  saml_metadata_document: string
}

export interface IamSamlProviderAttributes {
  arn: string
  id: string
  name: string
  saml_metadata_document: string
  valid_until: string
}

export class IamSamlProvider extends Resource<IamSamlProviderArguments, IamSamlProviderAttributes> {
  kind = 'aws_iam_saml_provider'
  _outputAttrNames = ['arn', 'id', 'name', 'saml_metadata_document', 'valid_until'] as const
}
