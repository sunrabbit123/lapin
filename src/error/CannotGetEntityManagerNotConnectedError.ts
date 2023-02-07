import { LapinError } from "./LapinError";

/**
 * Thrown when consumer tries to access entity manager before connection is established.
 */
export class CannotGetEntityManagerNotConnectedError extends LapinError {
    constructor(connectionName: string) {
        super(
            `Cannot get entity manager for "${connectionName}" connection because connection is not yet established.`,
        );
    }
}
