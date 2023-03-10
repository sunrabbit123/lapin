import { LapinError } from "./LapinError";

/**
 * Thrown if custom repositories that extend AbstractRepository classes does not have managed entity.
 */
export class CustomRepositoryDoesNotHaveEntityError extends LapinError {
    constructor(repository: any) {
        super(
            `Custom repository ${
                typeof repository === "function"
                    ? repository.name
                    : repository.constructor.name
            } does not have managed entity. ` +
                `Did you forget to specify entity for it @EntityRepository(MyEntity)? `,
        );
    }
}
