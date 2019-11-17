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
  kind = 'aws_glue_classifier'
  _outputAttrNames = ['id', 'name'] as const
}
