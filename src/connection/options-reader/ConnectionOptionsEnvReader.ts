import { DataSourceOptions } from "../../data-source/DataSourceOptions";
import { PlatformTools } from "../../platform/PlatformTools";
import { OrmUtils } from "../../util/OrmUtils";

/**
 * Reads connection options from environment variables.
 * Environment variables can have only a single connection.
 * Its strongly required to define LAPIN_CONNECTION env variable.
 *
 * @deprecated
 */
export class ConnectionOptionsEnvReader {
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     * Reads connection options from environment variables.
     */
    async read(): Promise<DataSourceOptions[]> {
        return [
            {
                type:
                    PlatformTools.getEnvVariable("LAPIN_CONNECTION") ||
                    (PlatformTools.getEnvVariable("LAPIN_URL")
                        ? PlatformTools.getEnvVariable("LAPIN_URL").split(
                              "://",
                          )[0]
                        : undefined),
                url: PlatformTools.getEnvVariable("LAPIN_URL"),
                host: PlatformTools.getEnvVariable("LAPIN_HOST"),
                port: this.stringToNumber(
                    PlatformTools.getEnvVariable("LAPIN_PORT"),
                ),
                username: PlatformTools.getEnvVariable("LAPIN_USERNAME"),
                password: PlatformTools.getEnvVariable("LAPIN_PASSWORD"),
                database: PlatformTools.getEnvVariable("LAPIN_DATABASE"),
                sid: PlatformTools.getEnvVariable("LAPIN_SID"),
                schema: PlatformTools.getEnvVariable("LAPIN_SCHEMA"),
                extra: PlatformTools.getEnvVariable("LAPIN_DRIVER_EXTRA")
                    ? JSON.parse(
                          PlatformTools.getEnvVariable("LAPIN_DRIVER_EXTRA"),
                      )
                    : undefined,
                synchronize: OrmUtils.toBoolean(
                    PlatformTools.getEnvVariable("LAPIN_SYNCHRONIZE"),
                ),
                dropSchema: OrmUtils.toBoolean(
                    PlatformTools.getEnvVariable("LAPIN_DROP_SCHEMA"),
                ),
                migrationsRun: OrmUtils.toBoolean(
                    PlatformTools.getEnvVariable("LAPIN_MIGRATIONS_RUN"),
                ),
                entities: this.stringToArray(
                    PlatformTools.getEnvVariable("LAPIN_ENTITIES"),
                ),
                migrations: this.stringToArray(
                    PlatformTools.getEnvVariable("LAPIN_MIGRATIONS"),
                ),
                migrationsTableName: PlatformTools.getEnvVariable(
                    "LAPIN_MIGRATIONS_TABLE_NAME",
                ),
                metadataTableName: PlatformTools.getEnvVariable(
                    "LAPIN_METADATA_TABLE_NAME",
                ),
                subscribers: this.stringToArray(
                    PlatformTools.getEnvVariable("LAPIN_SUBSCRIBERS"),
                ),
                logging: this.transformLogging(
                    PlatformTools.getEnvVariable("LAPIN_LOGGING"),
                ),
                logger: PlatformTools.getEnvVariable("LAPIN_LOGGER"),
                entityPrefix: PlatformTools.getEnvVariable(
                    "LAPIN_ENTITY_PREFIX",
                ),
                maxQueryExecutionTime: PlatformTools.getEnvVariable(
                    "LAPIN_MAX_QUERY_EXECUTION_TIME",
                ),
                debug: PlatformTools.getEnvVariable("LAPIN_DEBUG"),
                cache: this.transformCaching(),
                uuidExtension: PlatformTools.getEnvVariable(
                    "LAPIN_UUID_EXTENSION",
                ),
            },
        ];
    }

    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------

    /**
     * Transforms logging string into real logging value connection requires.
     */
    protected transformLogging(logging: string): any {
        if (logging === "true" || logging === "TRUE" || logging === "1")
            return true;
        if (logging === "all") return "all";

        return this.stringToArray(logging);
    }

    /**
     * Transforms caching option into real caching value option requires.
     */
    protected transformCaching(): boolean | object | undefined {
        const caching = PlatformTools.getEnvVariable("LAPIN_CACHE");
        if (caching === "true" || caching === "TRUE" || caching === "1")
            return true;
        if (caching === "false" || caching === "FALSE" || caching === "0")
            return false;
        if (
            caching === "redis" ||
            caching === "ioredis" ||
            caching === "database"
        )
            return {
                type: caching,
                options: PlatformTools.getEnvVariable("LAPIN_CACHE_OPTIONS")
                    ? JSON.parse(
                          PlatformTools.getEnvVariable("LAPIN_CACHE_OPTIONS"),
                      )
                    : undefined,
                alwaysEnabled: PlatformTools.getEnvVariable(
                    "LAPIN_CACHE_ALWAYS_ENABLED",
                ),
                duration: parseInt(
                    PlatformTools.getEnvVariable("LAPIN_CACHE_DURATION"),
                ),
            };

        return undefined;
    }

    /**
     * Converts a string which contains multiple elements split by comma into a string array of strings.
     */
    protected stringToArray(variable?: string) {
        if (!variable) return [];
        return variable.split(",").map((str) => str.trim());
    }

    /**
     * Converts a string which contains a number into a javascript number
     */
    private stringToNumber(value: any): number | undefined {
        if (!value) {
            return undefined;
        }

        return parseInt(value);
    }
}
