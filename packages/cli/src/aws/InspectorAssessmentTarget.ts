import {Resource} from '../Resource'

export interface InspectorAssessmentTargetArguments {
  id?: string
  name: string
  resource_group_arn?: string
}

export interface InspectorAssessmentTargetAttributes {
  arn: string
  id: string
  name: string
  resource_group_arn?: string
}

export class InspectorAssessmentTarget extends Resource<
  InspectorAssessmentTargetArguments,
  InspectorAssessmentTargetAttributes
> {
  _kind = 'aws_inspector_assessment_target'

  get arn() {
    return this._attr('arn')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get resource_group_arn() {
    return this._attr('resource_group_arn')
  }
}
