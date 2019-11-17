import {Resource} from '../Resource'

export interface SesTemplateArguments {
  html?: string
  id?: string
  name: string
  subject?: string
  text?: string
}

export interface SesTemplateAttributes {
  html?: string
  id: string
  name: string
  subject?: string
  text?: string
}

export class SesTemplate extends Resource<SesTemplateArguments, SesTemplateAttributes> {
  kind = 'aws_ses_template'
  _outputAttrNames = ['html', 'id', 'name', 'subject', 'text'] as const
}
