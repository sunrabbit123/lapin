import { RedisQueryResultCache } from "./RedisQueryResultCache";
import { DbQueryResultCache } from "./DbQueryResultCache";
import { QueryResultCache } from "./QueryResultCache";
import { DataSource } from "../data-source/DataSource";
import { LapinError } from "../error/LapinError";

/**
 * Caches query result into Redis database.
 */
export class QueryResultCacheFactory {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(protected connection: DataSource) {}

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     * Creates a new query result cache based on connection options.
     */
    create(): QueryResultCache {
        if (!this.connection.options.cache)
            throw new LapinError(
                `To use cache you need to enable it in connection options by setting cache: true or providing some caching options. Example: { host: ..., username: ..., cache: true }`,
            );

        const cache: any = this.connection.options.cache;

        if (cache.provider && typeof cache.provider === "function") {
            return cache.provider(this.connection);
        }

        if (
            cache.type === "redis" ||
            cache.type === "ioredis" ||
            cache.type === "ioredis/cluster"
        ) {
            return new RedisQueryResultCache(this.connection, cache.type);
        } else {
            return new DbQueryResultCache(this.connection);
        }
    }
}
