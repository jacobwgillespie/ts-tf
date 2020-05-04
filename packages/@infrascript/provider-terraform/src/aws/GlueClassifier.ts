import {Resource} from '../Resource'

export interface GlueClassifierArguments {
  id?: string
  name: string
}

export interface GlueClassifierAttributes {
  id: string
  name: string
}

export class GlueClassifier extends Resource<GlueClassifierArguments, GlueClassifierAttributes> {
  _kind = 'aws_glue_classifier'

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }
}
