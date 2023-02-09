import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "../../../../src";

@Entity({ name: "Session" })
export class Session extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        type: "timestamp",
        precision: 4,
        default: () => "CURRENT_TIMESTAMP(4)",
        onUpdate: "CURRENT_TIMESTAMP(4)",
    })
    ts: Date;
}
