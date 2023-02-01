import { EntityMetadata } from "../metadata/EntityMetadata"
import { lapinError } from "./lapinError"

export class MissingDeleteDateColumnError extends lapinError {
    constructor(entityMetadata: EntityMetadata) {
        super(
            `Entity "${entityMetadata.name}" does not have delete date columns.`,
        )
    }
}
