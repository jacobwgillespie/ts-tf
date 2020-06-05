import {is} from '@infrascript/type-system'
import {ctyToType} from './CtyTypes'

const type = ctyToType(['list', ['object', {a: 'string', b: 'number'}]])

function validate(value: unknown) {
  if (is(type, value)) {
    console.log('true', value)
  } else {
    console.log('false', value)
  }
}

validate('string')
validate(false)
validate([])
validate([{a: 'a', b: 123}])
validate(['thing', false])
