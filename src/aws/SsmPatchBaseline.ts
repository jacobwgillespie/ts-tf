import {Resource} from '../Resource'

export interface SsmPatchBaselineArguments {
  approved_patches?: Set<string>
  approved_patches_compliance_level?: string
  description?: string
  id?: string
  name: string
  operating_system?: string
  rejected_patches?: Set<string>
  tags?: {[key: string]: string}
}

export interface SsmPatchBaselineAttributes {
  approved_patches?: Set<string>
  approved_patches_compliance_level?: string
  description?: string
  id: string
  name: string
  operating_system?: string
  rejected_patches?: Set<string>
  tags?: {[key: string]: string}
}

export class SsmPatchBaseline extends Resource<SsmPatchBaselineArguments, SsmPatchBaselineAttributes> {
  kind = 'aws_ssm_patch_baseline'
  _outputAttrNames = [
    'approved_patches',
    'approved_patches_compliance_level',
    'description',
    'id',
    'name',
    'operating_system',
    'rejected_patches',
    'tags',
  ] as const
}
