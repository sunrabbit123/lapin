import { Migration } from "../migration/Migration";
import { LapinError } from "./LapinError";

/**
 * Thrown when the per-migration transaction mode is overriden but the global transaction mode is set to "all".
 */
export class ForbiddenTransactionModeOverrideError extends LapinError {
    constructor(migrationsOverridingTransactionMode: Migration[]) {
        const migrationNames = migrationsOverridingTransactionMode.map(
            (migration) => `"${migration.name}"`,
        );

        super(
            `Migrations ${migrationNames.join(
                ", ",
            )} override the transaction mode, but the global transaction mode is "all"`,
        );
    }
}
