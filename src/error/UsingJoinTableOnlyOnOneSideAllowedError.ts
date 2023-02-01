import { EntityMetadata } from "../metadata/EntityMetadata"
import { RelationMetadata } from "../metadata/RelationMetadata"
import { LapinError } from "./LapinError"

export class UsingJoinTableOnlyOnOneSideAllowedError extends LapinError {
    constructor(entityMetadata: EntityMetadata, relation: RelationMetadata) {
        super(
            `Using JoinTable is allowed only on one side of the many-to-many relationship. ` +
                `Both ${entityMetadata.name}#${relation.propertyName} and ${
                    relation.inverseEntityMetadata.name
                }#${relation.inverseRelation!.propertyName} ` +
                `has JoinTable decorators. Choose one of them and left JoinColumn decorator only on it.`,
        )
    }
}
