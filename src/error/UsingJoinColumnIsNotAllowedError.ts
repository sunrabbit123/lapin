import { EntityMetadata } from "../metadata/EntityMetadata"
import { RelationMetadata } from "../metadata/RelationMetadata"
import { LapinError } from "./LapinError"

export class UsingJoinColumnIsNotAllowedError extends LapinError {
    constructor(entityMetadata: EntityMetadata, relation: RelationMetadata) {
        super(
            `Using JoinColumn on ${entityMetadata.name}#${relation.propertyName} is wrong. ` +
                `You can use JoinColumn only on one-to-one and many-to-one relations.`,
        )
    }
}
