import {IAM, AWSError} from 'aws-sdk'

export interface Procedure {
  [Symbol.asyncIterator]: () => AsyncGenerator<Procedure[], Error | undefined, void>
}

export class ExampleProcedure implements Procedure {
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], Error | undefined, void> {
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

    return undefined
  }
}

function sleep(delay: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), delay))
}

export class WaitSubProcedure implements Procedure {
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], Error | undefined, void> {
    console.log('run wait procedure')
    await sleep(1000)
    return undefined
  }
}

export class IAMUserProcedure implements Procedure {
  #username: string
  constructor(username: string) {
    this.#username = username
  }

  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], Error | undefined, void> {
    console.log('aws iam role procedure')
    const iamClient = new IAM()
    try {
      const user = (await iamClient.getUser({UserName: this.#username}).promise()).User
      console.log(user.Arn)
    } catch (error) {
      if ((error as AWSError).code === 'NoSuchEntity') {
        yield* new CreateIAMUserResource(this.#username)
      }
    }
    return undefined
  }
}

export class CreateIAMUserResource implements Procedure {
  #username: string
  constructor(username: string) {
    this.#username = username
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator](): AsyncGenerator<Procedure[], Error | undefined, void> {
    console.log('create iam user procedure')
    const result = await new IAM()
      .createUser({
        UserName: this.#username,
      })
      .promise()
    console.log(result.User?.Arn)
    return undefined
  }
}
