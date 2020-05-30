import {Procedure, ExampleProcedure} from "../src/Procedure"

type PlanResponse = {
    error?: Error,
    procedures: Procedure[]
}

export winterface Plan {
    name: string,
    create(): PlanResponse
}

export class GenericPlan implements Plan {
    name: string;
    create(): PlanResponse {
        const sample: PlanResponse = {
            procedures: [new ExampleProcedure()]
        }
        return sample
    }

}
