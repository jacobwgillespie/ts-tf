import {Resource} from '../Resource'

export interface MediaStoreContainerPolicyArguments {
  container_name: string
  id?: string
  policy: string
}

export interface MediaStoreContainerPolicyAttributes {
  container_name: string
  id: string
  policy: string
}

export class MediaStoreContainerPolicy extends Resource<
  MediaStoreContainerPolicyArguments,
  MediaStoreContainerPolicyAttributes
> {
  _kind = 'aws_media_store_container_policy'

  get container_name() {
    return this._attr('container_name')
  }

  get id() {
    return this._attr('id')
  }

  get policy() {
    return this._attr('policy')
  }
}
