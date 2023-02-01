import { lapinError } from "./lapinError"

export class NestedSetMultipleRootError extends lapinError {
    constructor() {
        super(`Nested sets do not support multiple root entities.`)
    }
}
