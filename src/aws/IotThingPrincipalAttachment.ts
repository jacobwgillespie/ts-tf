import {Resource} from '../Resource'

export interface IotThingPrincipalAttachmentArguments {
  id?: string
  principal: string
  thing: string
}

export interface IotThingPrincipalAttachmentAttributes {
  id: string
  principal: string
  thing: string
}

export class IotThingPrincipalAttachment extends Resource<
  IotThingPrincipalAttachmentArguments,
  IotThingPrincipalAttachmentAttributes
> {
  _kind = 'aws_iot_thing_principal_attachment'

  get id() {
    return this._attr('id')
  }

  get principal() {
    return this._attr('principal')
  }

  get thing() {
    return this._attr('thing')
  }
}
