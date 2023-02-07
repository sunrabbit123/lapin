import { FindOperator } from "../FindOperator";
import { EqualOperator } from "../EqualOperator";

/**
 * Find Options Operator.
 * This operator is handy to provide object value for non-relational properties of the Entity.
 *
 * Examples:
 *      { someField: Equal("value") }
 *      { uuid: Equal(new UUID()) }
 */
export function Equal<T>(value: T | FindOperator<T>) {
    return new EqualOperator(value);
}
