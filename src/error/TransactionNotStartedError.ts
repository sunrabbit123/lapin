import { lapinError } from "./lapinError"

/**
 * Thrown when transaction is not started yet and user tries to run commit or rollback.
 */
export class TransactionNotStartedError extends lapinError {
    constructor() {
        super(
            `Transaction is not started yet, start transaction before committing or rolling it back.`,
        )
    }
}
