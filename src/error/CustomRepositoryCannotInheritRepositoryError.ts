import { LapinError } from "./LapinError";

/**
 * Thrown if custom repository inherits Repository class however entity is not set in @EntityRepository decorator.
 */
export class CustomRepositoryCannotInheritRepositoryError extends LapinError {
    constructor(repository: any) {
        super(
            `Custom entity repository ${
                typeof repository === "function"
                    ? repository.name
                    : repository.constructor.name
            } ` +
                ` cannot inherit Repository class without entity being set in the @EntityRepository decorator.`,
        );
    }
}
