import { DataSourceOptions } from "../../data-source/DataSourceOptions";
import { PlatformTools } from "../../platform/PlatformTools";
import { OrmUtils } from "../../util/OrmUtils";

/**
 * Reads connection options from environment variables.
 * Environment variables can have only a single connection.
 * Its strongly required to define lapin_CONNECTION env variable.
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
                    PlatformTools.getEnvVariable("lapin_CONNECTION") ||
                    (PlatformTools.getEnvVariable("lapin_URL")
                        ? PlatformTools.getEnvVariable("lapin_URL").split(
                              "://",
                          )[0]
                        : undefined),
                url: PlatformTools.getEnvVariable("lapin_URL"),
                host: PlatformTools.getEnvVariable("lapin_HOST"),
                port: this.stringToNumber(
                    PlatformTools.getEnvVariable("lapin_PORT"),
                ),
                username: PlatformTools.getEnvVariable("lapin_USERNAME"),
                password: PlatformTools.getEnvVariable("lapin_PASSWORD"),
                database: PlatformTools.getEnvVariable("lapin_DATABASE"),
                sid: PlatformTools.getEnvVariable("lapin_SID"),
                schema: PlatformTools.getEnvVariable("lapin_SCHEMA"),
                extra: PlatformTools.getEnvVariable("lapin_DRIVER_EXTRA")
                    ? JSON.parse(
                          PlatformTools.getEnvVariable("lapin_DRIVER_EXTRA"),
                      )
                    : undefined,
                synchronize: OrmUtils.toBoolean(
                    PlatformTools.getEnvVariable("lapin_SYNCHRONIZE"),
                ),
                dropSchema: OrmUtils.toBoolean(
                    PlatformTools.getEnvVariable("lapin_DROP_SCHEMA"),
                ),
                migrationsRun: OrmUtils.toBoolean(
                    PlatformTools.getEnvVariable("lapin_MIGRATIONS_RUN"),
                ),
                entities: this.stringToArray(
                    PlatformTools.getEnvVariable("lapin_ENTITIES"),
                ),
                migrations: this.stringToArray(
                    PlatformTools.getEnvVariable("lapin_MIGRATIONS"),
                ),
                migrationsTableName: PlatformTools.getEnvVariable(
                    "lapin_MIGRATIONS_TABLE_NAME",
                ),
                metadataTableName: PlatformTools.getEnvVariable(
                    "lapin_METADATA_TABLE_NAME",
                ),
                subscribers: this.stringToArray(
                    PlatformTools.getEnvVariable("lapin_SUBSCRIBERS"),
                ),
                logging: this.transformLogging(
                    PlatformTools.getEnvVariable("lapin_LOGGING"),
                ),
                logger: PlatformTools.getEnvVariable("lapin_LOGGER"),
                entityPrefix: PlatformTools.getEnvVariable(
                    "lapin_ENTITY_PREFIX",
                ),
                maxQueryExecutionTime: PlatformTools.getEnvVariable(
                    "lapin_MAX_QUERY_EXECUTION_TIME",
                ),
                debug: PlatformTools.getEnvVariable("lapin_DEBUG"),
                cache: this.transformCaching(),
                uuidExtension: PlatformTools.getEnvVariable(
                    "lapin_UUID_EXTENSION",
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
        const caching = PlatformTools.getEnvVariable("lapin_CACHE");
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
                options: PlatformTools.getEnvVariable("lapin_CACHE_OPTIONS")
                    ? JSON.parse(
                          PlatformTools.getEnvVariable("lapin_CACHE_OPTIONS"),
                      )
                    : undefined,
                alwaysEnabled: PlatformTools.getEnvVariable(
                    "lapin_CACHE_ALWAYS_ENABLED",
                ),
                duration: parseInt(
                    PlatformTools.getEnvVariable("lapin_CACHE_DURATION"),
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
