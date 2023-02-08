import { ObjectType } from "./ObjectType";
import { EntitySchema, ObjectLiteral } from "..";

/**
 * Entity target.
 */
export type EntityTarget<Entity> =
    | ObjectType<Entity>
    | EntitySchema<Entity>
    | string
    | { type: Entity; name: string }
    | ObjectLiteral;
