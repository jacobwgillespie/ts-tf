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
  kind = 'aws_iot_thing_principal_attachment'
  _outputAttrNames = ['id', 'principal', 'thing'] as const
}
