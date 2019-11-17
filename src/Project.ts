import {Resource} from './Resource'
import {Module} from './Module'

function resourcesToJSON(resources: Resource<any, any>[]) {
  return resources.reduce(
    (obj, resource) => {
      obj[resource.kind] = obj[resource.kind] || {}

      if (obj[resource.kind][resource.name] && obj[resource.kind][resource.name] !== resource) {
        throw new Error(`Duplicate resource, ${resource.kind}.${resource.name} already exists`)
      }

      obj[resource.kind][resource.name] = resource
      return obj
    },
    {} as {[kind: string]: {[name: string]: Resource<any, any>}},
  )
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
    const resources = this.resources.filter(r => !(r instanceof Module))
    const modules = this.resources.filter(r => r instanceof Module)

    return {
      ...(resources.length ? {resource: resourcesToJSON(resources)} : {}),
      ...(modules.length ? {module: resourcesToJSON(modules)} : {}),
    }
  }
}
