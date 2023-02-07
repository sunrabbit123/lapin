import { Driver } from "../driver/Driver";
import { LapinError } from "./LapinError";

export class TreeRepositoryNotSupportedError extends LapinError {
    constructor(driver: Driver) {
        super(
            `Tree repositories are not supported in ${driver.options.type} driver.`,
        );
    }
}
