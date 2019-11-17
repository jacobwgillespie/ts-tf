import {Resource} from '../Resource'

export interface EmrClusterArguments {
  additional_info?: string
  applications?: Set<string>
  autoscaling_role?: string
  configurations?: string
  configurations_json?: string
  core_instance_count?: number
  core_instance_type?: string
  custom_ami_id?: string
  ebs_root_volume_size?: number
  id?: string
  keep_job_flow_alive_when_no_steps?: boolean
  log_uri?: string
  master_instance_type?: string
  name: string
  release_label: string
  scale_down_behavior?: string
  security_configuration?: string
  service_role: string
  step?: Array<{
    action_on_failure: string
    hadoop_jar_step: Array<{args: Array<string>; jar: string; main_class: string; properties: {[key: string]: string}}>
    name: string
  }>
  tags?: {[key: string]: string}
  termination_protection?: boolean
  visible_to_all_users?: boolean
}

export interface EmrClusterAttributes {
  additional_info?: string
  applications?: Set<string>
  autoscaling_role?: string
  cluster_state: string
  configurations?: string
  configurations_json?: string
  core_instance_count: number
  core_instance_type: string
  custom_ami_id?: string
  ebs_root_volume_size?: number
  id: string
  keep_job_flow_alive_when_no_steps: boolean
  log_uri?: string
  master_instance_type: string
  master_public_dns: string
  name: string
  release_label: string
  scale_down_behavior: string
  security_configuration?: string
  service_role: string
  step: Array<{
    action_on_failure: string
    hadoop_jar_step: Array<{args: Array<string>; jar: string; main_class: string; properties: {[key: string]: string}}>
    name: string
  }>
  tags?: {[key: string]: string}
  termination_protection: boolean
  visible_to_all_users?: boolean
}

export class EmrCluster extends Resource<EmrClusterArguments, EmrClusterAttributes> {
  kind = 'aws_emr_cluster'
  _outputAttrNames = [
    'additional_info',
    'applications',
    'autoscaling_role',
    'cluster_state',
    'configurations',
    'configurations_json',
    'core_instance_count',
    'core_instance_type',
    'custom_ami_id',
    'ebs_root_volume_size',
    'id',
    'keep_job_flow_alive_when_no_steps',
    'log_uri',
    'master_instance_type',
    'master_public_dns',
    'name',
    'release_label',
    'scale_down_behavior',
    'security_configuration',
    'service_role',
    'step',
    'tags',
    'termination_protection',
    'visible_to_all_users',
  ] as const
}
