import { Subject } from "../persistence/Subject"
import { lapinError } from "./lapinError"

/**
 * Thrown when same object is scheduled for remove and updation at the same time.
 */
export class SubjectRemovedAndUpdatedError extends lapinError {
    constructor(subject: Subject) {
        super(
            `Removed entity "${subject.metadata.name}" is also scheduled for update operation. ` +
                `Make sure you are not updating and removing same object (note that update or remove may be executed by cascade operations).`,
        )
    }
}
