import { LapinError } from "./LapinError";

/**
 * Thrown when consumer tries to execute operation allowed only if connection is opened.
 */
export class CannotExecuteNotConnectedError extends LapinError {
    constructor(connectionName: string) {
        super(
            `Cannot execute operation on "${connectionName}" connection because connection is not yet established.`,
        );
    }
}
