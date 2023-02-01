import { lapinError } from "./lapinError"

/**
 * Thrown when some option is not set in the connection options.
 */
export class NoConnectionOptionError extends lapinError {
    constructor(optionName: string) {
        super(
            `Option "${optionName}" is not set in your connection options, please ` +
                `define "${optionName}" option in your connection options or ormconfig.json`,
        )
    }
}
