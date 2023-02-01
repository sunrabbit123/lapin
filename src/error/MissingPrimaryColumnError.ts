import { EntityMetadata } from "../metadata/EntityMetadata"
import { lapinError } from "./lapinError"

export class MissingPrimaryColumnError extends lapinError {
    constructor(entityMetadata: EntityMetadata) {
        super(
            `Entity "${entityMetadata.name}" does not have a primary column. Primary column is required to ` +
                `have in all your entities. Use @PrimaryColumn decorator to add a primary column to your entity.`,
        )
    }
}
