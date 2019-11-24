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
  _kind = 'aws_ses_template'

  get html() {
    return this._attr('html')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get subject() {
    return this._attr('subject')
  }

  get text() {
    return this._attr('text')
  }
}
