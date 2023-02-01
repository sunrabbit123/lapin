import { RelationMetadata } from "../metadata/RelationMetadata"
import { lapinError } from "./lapinError"

/**
 * Thrown when relation has array initialized which is forbidden my ORM.
 *
 * @see https://github.com/lapin/lapin/issues/1319
 * @see http://lapin.io/#/relations-faq/avoid-relation-property-initializers
 */
export class InitializedRelationError extends lapinError {
    constructor(relation: RelationMetadata) {
        super(
            `Array initializations are not allowed in entity relations. ` +
                `Please remove array initialization (= []) from "${relation.entityMetadata.targetName}#${relation.propertyPath}". ` +
                `This is ORM requirement to make relations to work properly. Refer docs for more information.`,
        )
    }
}
