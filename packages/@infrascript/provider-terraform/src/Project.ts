/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

import {Resource} from './Resource'
import {Module} from './Module'

function resourcesToJSON(resources: Resource<any, any>[]) {
  return resources.reduce((obj, resource) => {
    obj[resource._kind] = obj[resource._kind] || {}

    if (obj[resource._kind][resource._name] && obj[resource._kind][resource._name] !== resource) {
      throw new Error(`Duplicate resource, ${resource._kind}.${resource._name} already exists`)
    }

    obj[resource._kind][resource._name] = resource
    return obj
  }, {} as {[kind: string]: {[name: string]: Resource<any, any>}})
}

export class Project {
  private resources: Resource<any, any>[]

  constructor(resources: Resource<any, any>[]) {
    this.resources = resources
  }

  static fromResource(resource: Resource<any, any>) {
    return new Project(resource.collect())
  }

  toJSON() {
    const resources = this.resources.filter((r) => !(r instanceof Module))
    const modules = this.resources.filter((r) => r instanceof Module)

    return {
      ...(resources.length > 0 ? {resource: resourcesToJSON(resources)} : {}),
      ...(modules.length > 0 ? {module: resourcesToJSON(modules)} : {}),
    }
  }
}
