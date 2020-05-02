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
  _kind = 'aws_iam_saml_provider'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get saml_metadata_document() {
    return this._attr('saml_metadata_document')
  }

  get valid_until() {
    return this._attr('valid_until')
  }
}
