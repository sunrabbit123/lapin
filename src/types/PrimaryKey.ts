import { PrimaryGeneratedColumnType } from "../driver/types/ColumnTypes";

type StringField =
    | "character varying" // postgres, cockroachdb
    | "varying character" // sqlite
    | "char varying" // cockroachdb
    | "nvarchar" // mssql, mysql
    | "national varchar" // mysql
    | "character" // mysql, postgres, sqlite, cockroachdb
    | "native character" // sqlite
    | "varchar" // mysql, postgres, mssql, sqlite, cockroachdb
    | "char" // mysql, postgres, mssql, oracle, cockroachdb, sap
    | "nchar" // mssql, oracle, sqlite, mysql, sap
    | "national char" // mysql
    | "varchar2" // oracle
    | "nvarchar2" // oracle, sqlite
    | "alphanum" // sap
    | "shorttext" // sap
    | "varbinary" // mssql, sap
    | "string"; // cockroachdb, spanner

export type PrimaryColumn = PrimaryGeneratedColumnType | StringField;

export module PrimaryColumn {
    export type getValueType<T extends PrimaryColumn> = T extends StringField
        ? string
        : number;
}
