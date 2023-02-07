import { LapinError } from "./LapinError";

/**
 * Thrown when consumer tries to get connection that does not exist.
 */
export class ConnectionNotFoundError extends LapinError {
    constructor(name: string) {
        super(`Connection "${name}" was not found.`);
    }
}
