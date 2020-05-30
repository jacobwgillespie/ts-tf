type ProcedureResponse = {
    error: Error,
    subProcedures: Procedure[]
}

export interface Procedure {
    name: string,
    execute(): ProcedureResponse
}

export class ExampleProcedure implements Procedure {
    name: string = "ExampleProcedure"
    execute(): ProcedureResponse {
        const x: ProcedureResponse = {
            error: undefined,
            subProcedures: []
        }
        return x
    }
}
