import {Resource} from '../Resource'

export interface InspectorAssessmentTemplateArguments {
  duration: number
  id?: string
  name: string
  rules_package_arns: Set<string>
  target_arn: string
}

export interface InspectorAssessmentTemplateAttributes {
  arn: string
  duration: number
  id: string
  name: string
  rules_package_arns: Set<string>
  target_arn: string
}

export class InspectorAssessmentTemplate extends Resource<
  InspectorAssessmentTemplateArguments,
  InspectorAssessmentTemplateAttributes
> {
  kind = 'aws_inspector_assessment_template'
  _outputAttrNames = ['arn', 'duration', 'id', 'name', 'rules_package_arns', 'target_arn'] as const
}
