import { LapinError } from "./LapinError"

/**
 * Thrown . Theoretically can't be thrown.
 */
export class PersistedEntityNotFoundError extends LapinError {
    constructor() {
        super(
            `Internal error. Persisted entity was not found in the list of prepared operated entities.`,
        )
    }
}
