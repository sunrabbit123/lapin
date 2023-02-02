import { LapinError } from "./LapinError";

/**
 * Thrown if some required driver's option is not set.
 */
export class DriverOptionNotSetError extends LapinError {
    constructor(optionName: string) {
        super(
            `Driver option (${optionName}) is not set. ` +
                `Please set it to perform connection to the database.`,
        );
    }
}
