import { lapinError } from "./lapinError"

/**
 * Thrown when a version check on an object that uses optimistic locking through a version field fails.
 */
export class OptimisticLockVersionMismatchError extends lapinError {
    constructor(
        entity: string,
        expectedVersion: number | Date,
        actualVersion: number | Date,
    ) {
        super(
            `The optimistic lock on entity ${entity} failed, version ${expectedVersion} was expected, but is actually ${actualVersion}.`,
        )
    }
}
