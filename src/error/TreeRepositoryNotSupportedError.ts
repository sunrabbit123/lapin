import { Driver } from "../driver/Driver"
import { lapinError } from "./lapinError"

export class TreeRepositoryNotSupportedError extends lapinError {
    constructor(driver: Driver) {
        super(
            `Tree repositories are not supported in ${driver.options.type} driver.`,
        )
    }
}
