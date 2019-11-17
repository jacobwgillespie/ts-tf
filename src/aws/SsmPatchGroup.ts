import {Resource} from '../Resource'

export interface SsmPatchGroupArguments {
  baseline_id: string
  id?: string
  patch_group: string
}

export interface SsmPatchGroupAttributes {
  baseline_id: string
  id: string
  patch_group: string
}

export class SsmPatchGroup extends Resource<SsmPatchGroupArguments, SsmPatchGroupAttributes> {
  kind = 'aws_ssm_patch_group'
  _outputAttrNames = ['baseline_id', 'id', 'patch_group'] as const
}
