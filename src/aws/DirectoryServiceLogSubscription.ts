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
  kind = 'aws_directory_service_log_subscription'
  _outputAttrNames = ['directory_id', 'id', 'log_group_name'] as const
}
