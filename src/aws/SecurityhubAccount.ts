import {Resource} from '../Resource'

export interface SecurityhubAccountArguments {
  id?: string
}

export interface SecurityhubAccountAttributes {
  id: string
}

export class SecurityhubAccount extends Resource<SecurityhubAccountArguments, SecurityhubAccountAttributes> {
  kind = 'aws_securityhub_account'
  _outputAttrNames = ['id'] as const
}
