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
  _kind = 'aws_inspector_assessment_template'

  get arn() {
    return this._attr('arn')
  }

  get duration() {
    return this._attr('duration')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get rules_package_arns() {
    return this._attr('rules_package_arns')
  }

  get target_arn() {
    return this._attr('target_arn')
  }
}
