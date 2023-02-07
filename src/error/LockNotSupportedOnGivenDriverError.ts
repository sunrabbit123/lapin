import { LapinError } from "./LapinError";

/**
 * Thrown when selected sql driver does not supports locking.
 */
export class LockNotSupportedOnGivenDriverError extends LapinError {
    constructor() {
        super(`Locking not supported on given driver.`);
    }
}
