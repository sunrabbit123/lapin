import { getMetadataArgsStorage } from "../../globals";
import { JoinColumnMetadataArgs } from "../../metadata-args/JoinColumnMetadataArgs";
import { JoinColumnOptions } from "../options/JoinColumnOptions";

/**
 * JoinColumn decorator used on one-to-one relations to specify owner side of relationship.
 * It also can be used on both one-to-one and many-to-one relations to specify custom column name
 * or custom referenced column.
 */
export function JoinColumn(): PropertyDecorator | Function;

/**
 * JoinColumn decorator used on one-to-one relations to specify owner side of relationship.
 * It also can be used on both one-to-one and many-to-one relations to specify custom column name
 * or custom referenced column.
 */
export function JoinColumn(
    options: JoinColumnOptions,
): PropertyDecorator | Function;

/**
 * JoinColumn decorator used on one-to-one relations to specify owner side of relationship.
 * It also can be used on both one-to-one and many-to-one relations to specify custom column name
 * or custom referenced column.
 */
export function JoinColumn(
    options: JoinColumnOptions[],
): PropertyDecorator | Function;

/**
 * JoinColumn decorator used on one-to-one relations to specify owner side of relationship.
 * It also can be used on both one-to-one and many-to-one relations to specify custom column name
 * or custom referenced column.
 */
export function JoinColumn(
    optionsOrOptionsArray?: JoinColumnOptions | JoinColumnOptions[],
): PropertyDecorator | Function {
    return function (object: Object, propertyName: string) {
        const options = Array.isArray(optionsOrOptionsArray)
            ? optionsOrOptionsArray
            : [optionsOrOptionsArray || {}];
        options.forEach((options) => {
            getMetadataArgsStorage().joinColumns.push({
                target: object.constructor,
                propertyName: propertyName,
                name: options.name,
                referencedColumnName: options.referencedColumnName,
                foreignKeyConstraintName: options.foreignKeyConstraintName,
            } as JoinColumnMetadataArgs);
        });
    };
}
