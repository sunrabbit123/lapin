import { lapinError } from "./lapinError"

export class QueryRunnerAlreadyReleasedError extends lapinError {
    constructor() {
        super(`Query runner already released. Cannot run queries anymore.`)
    }
}
