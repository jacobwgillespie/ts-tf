// import {CloudwatchLogGroup} from './aws'
// import {Output} from './Output'
// import {Project} from './Project'

// const lg = new CloudwatchLogGroup('log_group', {id: 'my-log-group', retention_in_days: 1, kms_key_id: '123'})
// const lg2 = new CloudwatchLogGroup('log_group_2', {id: lg.id, retention_in_days: undefined})

// const out = new Output<string>('lg_id', {type: 'string', value: lg2.id})

// const project = Project.fromResource(out)
// console.log(JSON.stringify(project, undefined, 2))
