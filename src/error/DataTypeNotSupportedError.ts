import { ColumnType } from "../driver/types/ColumnTypes"
import { DatabaseType } from "../driver/types/DatabaseType"
import { ColumnMetadata } from "../metadata/ColumnMetadata"
import { LapinError } from "./LapinError"

export class DataTypeNotSupportedError extends LapinError {
    constructor(
        column: ColumnMetadata,
        dataType: ColumnType,
        database?: DatabaseType,
    ) {
        super()

        const type =
            typeof dataType === "string" ? dataType : (<any>dataType).name
        this.message = `Data type "${type}" in "${column.entityMetadata.targetName}.${column.propertyName}" is not supported by "${database}" database.`
    }
}
