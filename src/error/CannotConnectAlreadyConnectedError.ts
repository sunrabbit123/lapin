import { lapinError } from "./lapinError"

/**
 * Thrown when consumer tries to connect when he already connected.
 */
export class CannotConnectAlreadyConnectedError extends lapinError {
    constructor(connectionName: string) {
        super(
            `Cannot create a "${connectionName}" connection because connection to the database already established.`,
        )
    }
}
