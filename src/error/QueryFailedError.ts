import { ObjectUtils } from "../util/ObjectUtils";
import { LapinError } from "./LapinError";

/**
 * Thrown when query execution has failed.
 */
export class QueryFailedError extends LapinError {
    constructor(
        readonly query: string,
        readonly parameters: any[] | undefined,
        readonly driverError: any,
    ) {
        super(
            driverError
                .toString()
                .replace(/^error: /, "")
                .replace(/^Error: /, "")
                .replace(/^Request/, ""),
        );

        if (driverError) {
            const {
                name: _, // eslint-disable-line
                ...otherProperties
            } = driverError;

            ObjectUtils.assign(this, {
                ...otherProperties,
            });
        }
    }
}
