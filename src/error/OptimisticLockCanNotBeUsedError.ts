import { LapinError } from "./LapinError"

/**
 * Thrown when an optimistic lock cannot be used in query builder.
 */
export class OptimisticLockCanNotBeUsedError extends LapinError {
    constructor() {
        super(`The optimistic lock can be used only with getOne() method.`)
    }
}
