import { lapinError } from "./lapinError"

/**
 * Thrown when selected sql driver does not supports locking.
 */
export class LockNotSupportedOnGivenDriverError extends lapinError {
    constructor() {
        super(`Locking not supported on given driver.`)
    }
}
