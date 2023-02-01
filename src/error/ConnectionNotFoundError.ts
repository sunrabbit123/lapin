import { lapinError } from "./lapinError"

/**
 * Thrown when consumer tries to get connection that does not exist.
 */
export class ConnectionNotFoundError extends lapinError {
    constructor(name: string) {
        super(`Connection "${name}" was not found.`)
    }
}
