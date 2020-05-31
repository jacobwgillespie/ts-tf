import * as t from './Type'

const type = t.Type.parse(['list', ['object', {a: 'string', b: 'number'}]])

function validate(value: unknown) {
  if (type.is(value)) {
    console.log('true', value)
  } else {
    console.log('false', value)
  }

  if (t.Type.is(['set', ['object', {a: 'string', b: 'number'}]], value)) {
    console.log('value matches static check', value)
  }
}

console.log(type.metaRepresentation())
validate('string')
validate(false)
validate([])
validate([{a: 'a', b: 123}])
validate(['thing', false])
