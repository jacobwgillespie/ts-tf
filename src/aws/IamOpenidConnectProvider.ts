import {Resource} from '../Resource'

export interface IamOpenidConnectProviderArguments {
  client_id_list: Array<string>
  id?: string
  thumbprint_list: Array<string>
  url: string
}

export interface IamOpenidConnectProviderAttributes {
  arn: string
  client_id_list: Array<string>
  id: string
  thumbprint_list: Array<string>
  url: string
}

export class IamOpenidConnectProvider extends Resource<
  IamOpenidConnectProviderArguments,
  IamOpenidConnectProviderAttributes
> {
  _kind = 'aws_iam_openid_connect_provider'

  get arn() {
    return this._attr('arn')
  }

  get client_id_list() {
    return this._attr('client_id_list')
  }

  get id() {
    return this._attr('id')
  }

  get thumbprint_list() {
    return this._attr('thumbprint_list')
  }

  get url() {
    return this._attr('url')
  }
}
