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
  _kind = 'aws_ssm_patch_baseline'

  get approved_patches() {
    return this._attr('approved_patches')
  }

  get approved_patches_compliance_level() {
    return this._attr('approved_patches_compliance_level')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get name() {
    return this._attr('name')
  }

  get operating_system() {
    return this._attr('operating_system')
  }

  get rejected_patches() {
    return this._attr('rejected_patches')
  }

  get tags() {
    return this._attr('tags')
  }
}
