import { lapinError } from "./lapinError"

/**
 * Thrown . Theoretically can't be thrown.
 */
export class PersistedEntityNotFoundError extends lapinError {
    constructor() {
        super(
            `Internal error. Persisted entity was not found in the list of prepared operated entities.`,
        )
    }
}
