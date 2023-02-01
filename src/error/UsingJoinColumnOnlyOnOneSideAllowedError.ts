import { EntityMetadata } from "../metadata/EntityMetadata"
import { RelationMetadata } from "../metadata/RelationMetadata"
import { lapinError } from "./lapinError"

export class UsingJoinColumnOnlyOnOneSideAllowedError extends lapinError {
    constructor(entityMetadata: EntityMetadata, relation: RelationMetadata) {
        super(
            `Using JoinColumn is allowed only on one side of the one-to-one relationship. ` +
                `Both ${entityMetadata.name}#${relation.propertyName} and ${
                    relation.inverseEntityMetadata.name
                }#${relation.inverseRelation!.propertyName} ` +
                `has JoinTable decorators. Choose one of them and left JoinTable decorator only on it.`,
        )
    }
}
