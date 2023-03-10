import { LapinError } from "./LapinError";

/**
 * Thrown when circular relations detected with nullable set to false.
 */
export class CircularRelationsError extends LapinError {
    constructor(path: string) {
        super(
            `Circular relations detected: ${path}. To resolve this issue you need to ` +
                `set nullable: true somewhere in this dependency structure.`,
        );
    }
}
