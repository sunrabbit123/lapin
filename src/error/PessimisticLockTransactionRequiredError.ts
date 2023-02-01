import { lapinError } from "./lapinError"

/**
 * Thrown when a transaction is required for the current operation, but there is none open.
 */
export class PessimisticLockTransactionRequiredError extends lapinError {
    constructor() {
        super(`An open transaction is required for pessimistic lock.`)
    }
}
