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
  _kind = 'aws_ssm_patch_group'

  get baseline_id() {
    return this._attr('baseline_id')
  }

  get id() {
    return this._attr('id')
  }

  get patch_group() {
    return this._attr('patch_group')
  }
}
