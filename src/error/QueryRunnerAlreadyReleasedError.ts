import { LapinError } from "./LapinError";

export class QueryRunnerAlreadyReleasedError extends LapinError {
    constructor() {
        super(`Query runner already released. Cannot run queries anymore.`);
    }
}
