import { LapinError } from "./LapinError";

export class NestedSetMultipleRootError extends LapinError {
    constructor() {
        super(`Nested sets do not support multiple root entities.`);
    }
}
