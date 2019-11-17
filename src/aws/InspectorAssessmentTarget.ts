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
  kind = 'aws_inspector_assessment_target'
  _outputAttrNames = ['arn', 'id', 'name', 'resource_group_arn'] as const
}
