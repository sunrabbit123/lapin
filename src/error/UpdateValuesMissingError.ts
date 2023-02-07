import { LapinError } from "./LapinError";

export class UpdateValuesMissingError extends LapinError {
    constructor() {
        super(
            `Cannot perform update query because update values are not defined. Call "qb.set(...)" method to specify updated values.`,
        );
    }
}
