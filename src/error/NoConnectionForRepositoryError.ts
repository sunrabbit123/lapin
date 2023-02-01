import { lapinError } from "./lapinError"

/**
 * Thrown when consumer tries to access repository before connection is established.
 */
export class NoConnectionForRepositoryError extends lapinError {
    constructor(connectionName: string) {
        super(
            `Cannot get a Repository for "${connectionName} connection, because connection with the database ` +
                `is not established yet. Call connection#connect method to establish connection.`,
        )
    }
}
