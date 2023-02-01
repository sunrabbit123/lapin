import { LapinError } from "./LapinError"

export class PrimaryColumnCannotBeNullableError extends LapinError {
    constructor(object: Object, propertyName: string) {
        super(
            `Primary column ${
                (<any>object.constructor).name
            }#${propertyName} cannot be nullable. ` +
                `Its not allowed for primary keys. Try to remove nullable option.`,
        )
    }
}
