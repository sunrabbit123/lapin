import { LapinError } from "./LapinError";

/**
 * Thrown when a transaction is required for the current operation, but there is none open.
 */
export class PessimisticLockTransactionRequiredError extends LapinError {
    constructor() {
        super(`An open transaction is required for pessimistic lock.`);
    }
}
