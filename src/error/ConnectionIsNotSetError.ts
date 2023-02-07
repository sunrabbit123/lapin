import { LapinError } from "./LapinError";

/**
 * Thrown when user tries to execute operation that requires connection to be established.
 */
export class ConnectionIsNotSetError extends LapinError {
    constructor(dbType: string) {
        super(
            `Connection with ${dbType} database is not established. Check connection configuration.`,
        );
    }
}
