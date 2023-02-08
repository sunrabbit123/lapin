import { FindOneOptions } from "../FindOneOptions";
import { ObjectLiteral } from "../../common/ObjectLiteral";
import { BaseEntity } from "../../repository/BaseEntity";

/**
 * Defines a special criteria to find specific entity.
 */
export type MongoFindOneOptions<Entity extends BaseEntity> = Omit<
    FindOneOptions<Entity>,
    "where"
> & {
    /**
     * Simple condition that should be applied to match entities.
     */
    where?: FindOneOptions<Entity>["where"] | ObjectLiteral;
};
