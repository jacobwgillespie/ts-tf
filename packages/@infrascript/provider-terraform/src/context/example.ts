import 'source-map-support/register'
import {Context} from './Context'

interface Data {
  value: number
}

const context1 = Context.for<Data>('ctx')
const context2 = Context.for<Data>('ctx')
console.log(context1 === context2, 'expected to be true')

function logger(expected: number) {
  console.log('boundLogger', context2.get('value'), `expected to be ${expected}`)
  context1.set('value', 123)
}

let boundLogger = context1.bind(logger)

context1.run(function () {
  context1.set('value', 0)
  console.log(context1.get('value'), 'expected to be 0')

  boundLogger = context1.bind(logger)
  requestHandler()
})

export function requestHandler() {
  context1.run(() => {
    console.log(context1.get('value'), 'expected to be 0')
    context1.set('value', 1)
    console.log(context1.get('value'), 'expected to be 1')

    boundLogger(0) // logs 0
    boundLogger(123) // logs 123
    console.log(context1.get('value'), 'expected to be 1')

    process.nextTick(() => {
      console.log(context1.get('value'), 'expected to be 1')

      context1.run(() => {
        console.log(context1.get('value'), 'expected to be 1')
        context1.set('value', 2)
        console.log(context1.get('value'), 'expected to be 2')
      })
    })
  })

  setTimeout(function () {
    console.log('1s timeout', context1.get('value'), 'expected to be 123')
  }, 1000)
}

context1
  .run(
    Promise.resolve('value')
      .then(() => {
        context1.set('value', 3)
      })
      .then(() => {
        console.log('promise', context2.get('value'), 'expected to be 3')
        context2.set('value', 4)
        throw new Error('example')
      }),
  )
  .catch((error) => {
    console.log('catch (outer)', context1.get('value'), 'expected to be 123')
    const ctx = Context.fromError<Data>(error)
    console.log('catch (outer) - error context', ctx?.get('value'), 'expected to be 4')
  })
