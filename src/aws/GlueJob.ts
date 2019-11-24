import {Resource} from '../Resource'

export interface GlueJobArguments {
  allocated_capacity?: number
  connections?: Array<string>
  default_arguments?: {[key: string]: string}
  description?: string
  id?: string
  max_capacity?: number
  max_retries?: number
  name: string
  role_arn: string
  security_configuration?: string
  timeout?: number
}

export interface GlueJobAttributes {
  allocated_capacity: number
  connections?: Array<string>
  default_arguments?: {[key: string]: string}
  description?: string
  id: string
  max_capacity: number
  max_retries?: number
  name: string
  role_arn: string
  security_configuration?: string
  timeout?: number
}

export class GlueJob extends Resource<GlueJobArguments, GlueJobAttributes> {
  _kind = 'aws_glue_job'

  get allocated_capacity() {
    return this._attr('allocated_capacity')
  }

  get connections() {
    return this._attr('connections')
  }

  get default_arguments() {
    return this._attr('default_arguments')
  }

  get description() {
    return this._attr('description')
  }

  get id() {
    return this._attr('id')
  }

  get max_capacity() {
    return this._attr('max_capacity')
  }

  get max_retries() {
    return this._attr('max_retries')
  }

  get name() {
    return this._attr('name')
  }

  get role_arn() {
    return this._attr('role_arn')
  }

  get security_configuration() {
    return this._attr('security_configuration')
  }

  get timeout() {
    return this._attr('timeout')
  }
}
