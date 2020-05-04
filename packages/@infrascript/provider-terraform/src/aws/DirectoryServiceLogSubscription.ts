import {Resource} from '../Resource'

export interface DirectoryServiceLogSubscriptionArguments {
  directory_id: string
  id?: string
  log_group_name: string
}

export interface DirectoryServiceLogSubscriptionAttributes {
  directory_id: string
  id: string
  log_group_name: string
}

export class DirectoryServiceLogSubscription extends Resource<
  DirectoryServiceLogSubscriptionArguments,
  DirectoryServiceLogSubscriptionAttributes
> {
  _kind = 'aws_directory_service_log_subscription'

  get directory_id() {
    return this._attr('directory_id')
  }

  get id() {
    return this._attr('id')
  }

  get log_group_name() {
    return this._attr('log_group_name')
  }
}
