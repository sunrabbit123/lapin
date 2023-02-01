import { EntityMetadata } from "../metadata/EntityMetadata"
import { RelationMetadata } from "../metadata/RelationMetadata"
import { LapinError } from "./LapinError"

export class UsingJoinTableIsNotAllowedError extends LapinError {
    constructor(entityMetadata: EntityMetadata, relation: RelationMetadata) {
        super(
            `Using JoinTable on ${entityMetadata.name}#${relation.propertyName} is wrong. ` +
                `${entityMetadata.name}#${relation.propertyName} has ${relation.relationType} relation, ` +
                `however you can use JoinTable only on many-to-many relations.`,
        )
    }
}
