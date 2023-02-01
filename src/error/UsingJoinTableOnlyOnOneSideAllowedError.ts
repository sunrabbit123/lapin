import { EntityMetadata } from "../metadata/EntityMetadata"
import { RelationMetadata } from "../metadata/RelationMetadata"
import { lapinError } from "./lapinError"

export class UsingJoinTableOnlyOnOneSideAllowedError extends lapinError {
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
