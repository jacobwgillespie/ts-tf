import {CloudwatchLogGroup} from './aws'
import {Project} from './Project'
import {Module} from './Module'
import {Output} from './Output'

interface CustomModuleAttributes {
  log_group: {
    id: string
  }
  thing: string
}

class CustomModule extends Module<CustomModuleAttributes> {}

const lg = new CloudwatchLogGroup('log_group', {id: 'my-log-group', retention_in_days: 1, kms_key_id: '123'})
const lg2 = new CloudwatchLogGroup('log_group_2', {id: lg.attrs.id, retention_in_days: undefined})

const m = new CustomModule('my-module', {source: './test', log_group: lg2, thing: 'asdf'})
const m2 = new CustomModule('my-module-2', {source: './test', log_group: lg2, thing: m.attrs.thing})

const out = new Output<string>('output', {type: 'string', value: m2.attrs.id})

const project = Project.fromResource(out)
console.log(JSON.stringify(project, null, 2))
