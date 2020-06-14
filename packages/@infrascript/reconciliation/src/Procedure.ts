import {IAM, AWSError} from 'aws-sdk'
import {AwsProvider} from '@ts-terraform/provider-aws'

export interface Procedure {
  [Symbol.asyncIterator]: () => AsyncGenerator<Procedure[], boolean, void>
}

export class ExampleProcedure implements Procedure {
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], boolean, void> {
    console.log('return procedure one response')
    yield* new WaitSubProcedure()

    console.log('return procedure two response')
    yield Promise.resolve([])

    console.log('return procedure three response')
    yield Promise.resolve([])

    console.log('return procedure four response')
    yield Promise.resolve([])

    console.log('return procedure fifth response')
    yield Promise.resolve([new WaitSubProcedure(), new WaitSubProcedure()])

    return true
  }
}

function sleep(delay: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), delay))
}

export class WaitSubProcedure implements Procedure {
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], boolean, void> {
    console.log('run wait procedure')
    await sleep(1000)
    return true
  }
}

export class IAMUserProcedure implements Procedure {
  #username: string
  constructor(username: string) {
    this.#username = username
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], boolean, void> {
    console.log('aws iam role procedure')
    const iamClient = new IAM()
    try {
      const user = (await iamClient.getUser({UserName: this.#username}).promise()).User
      console.log(user.Arn)
    } catch (error) {
      if ((error as AWSError).code === 'NoSuchEntity') {
        yield* new CreateIAMUserResource(this.#username)
        return false
      }
    }
    return true
  }
}

export class CreateIAMUserResource implements Procedure {
  #username: string
  constructor(username: string) {
    this.#username = username
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], boolean, void> {
    console.log('create iam user procedure')
    const result = await new IAM()
      .createUser({
        UserName: this.#username,
      })
      .promise()
    console.log(result.User?.Arn)
    return true
  }
}

export class TFExampleProcedure implements Procedure {
  #awsProvider: AwsProvider
  constructor(awsProvider: AwsProvider) {
    this.#awsProvider = awsProvider
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], boolean, void> {
    const importRes = await this.#awsProvider.importResourceState('aws_iam_user', 'kylegalbraith2')
    const readRes = await this.#awsProvider.readResource('aws_iam_user', importRes[0].state)
    const plan = await this.#awsProvider.planResourceChange('aws_iam_user', readRes ?? importRes[0].state, {
      ...importRes[0].state,
    })

    await this.#awsProvider.applyResourceChange('aws_iam_user', readRes ?? importRes[0].state, plan.plannedState, {
      private: plan.plannedPrivate,
    })

    return true
  }
}
