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
  kind = 'aws_media_store_container_policy'
  _outputAttrNames = ['container_name', 'id', 'policy'] as const
}
