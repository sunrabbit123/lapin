import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { EditHistory } from "./EditHistory";

export class ExtraInformation {
    @Column((type) => EditHistory)
    lastEdit: EditHistory;
}
