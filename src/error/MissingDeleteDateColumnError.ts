import { EntityMetadata } from "../metadata/EntityMetadata"
import { LapinError } from "./LapinError"

export class MissingDeleteDateColumnError extends LapinError {
    constructor(entityMetadata: EntityMetadata) {
        super(
            `Entity "${entityMetadata.name}" does not have delete date columns.`,
        )
    }
}
