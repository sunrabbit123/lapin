import { Subject } from "../persistence/Subject"
import { LapinError } from "./LapinError"

/**
 * Thrown when same object is scheduled for remove and updation at the same time.
 */
export class SubjectRemovedAndUpdatedError extends LapinError {
    constructor(subject: Subject) {
        super(
            `Removed entity "${subject.metadata.name}" is also scheduled for update operation. ` +
                `Make sure you are not updating and removing same object (note that update or remove may be executed by cascade operations).`,
        )
    }
}
