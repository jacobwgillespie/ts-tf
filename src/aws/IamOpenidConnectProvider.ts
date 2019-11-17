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
  kind = 'aws_iam_openid_connect_provider'
  _outputAttrNames = ['arn', 'client_id_list', 'id', 'thumbprint_list', 'url'] as const
}
