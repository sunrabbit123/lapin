import { LapinError } from "./LapinError";

/**
 * Thrown when consumer tries to connect when he already connected.
 */
export class CannotConnectAlreadyConnectedError extends LapinError {
    constructor(connectionName: string) {
        super(
            `Cannot create a "${connectionName}" connection because connection to the database already established.`,
        );
    }
}
