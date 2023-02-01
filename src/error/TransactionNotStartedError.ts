import { LapinError } from "./LapinError"

/**
 * Thrown when transaction is not started yet and user tries to run commit or rollback.
 */
export class TransactionNotStartedError extends LapinError {
    constructor() {
        super(
            `Transaction is not started yet, start transaction before committing or rolling it back.`,
        )
    }
}
