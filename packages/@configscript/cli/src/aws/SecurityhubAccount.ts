import {Resource} from '../Resource'

export interface SecurityhubAccountArguments {
  id?: string
}

export interface SecurityhubAccountAttributes {
  id: string
}

export class SecurityhubAccount extends Resource<SecurityhubAccountArguments, SecurityhubAccountAttributes> {
  _kind = 'aws_securityhub_account'

  get id() {
    return this._attr('id')
  }
}
