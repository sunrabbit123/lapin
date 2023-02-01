import { lapinError } from "./lapinError"

export class UpdateValuesMissingError extends lapinError {
    constructor() {
        super(
            `Cannot perform update query because update values are not defined. Call "qb.set(...)" method to specify updated values.`,
        )
    }
}
