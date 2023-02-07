import { LapinError } from "./LapinError";

/**
 * Thrown when an entity does not have no version and no update date column.
 */
export class NoVersionOrUpdateDateColumnError extends LapinError {
    constructor(entity: string) {
        super(`Entity ${entity} does not have version or update date columns.`);
    }
}
