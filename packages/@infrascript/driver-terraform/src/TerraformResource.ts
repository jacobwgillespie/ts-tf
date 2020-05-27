import {PropInputObject, Resource} from '@infrascript/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class TerraformResource<T extends PropInputObject = any> extends Resource<T> {}
