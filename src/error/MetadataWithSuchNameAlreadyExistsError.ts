import { lapinError } from "./lapinError"

export class MetadataWithSuchNameAlreadyExistsError extends lapinError {
    constructor(metadataType: string, name: string) {
        super(
            metadataType +
                " metadata with such name " +
                name +
                " already exists. " +
                "Do you apply decorator twice? Or maybe try to change a name?",
        )
    }
}
