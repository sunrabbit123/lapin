import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Flight extends BaseEntity {
    constructor(id: number, date: Date) {
        super();
        this.id = id;
        this.date = date;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp with time zone")
    date: Date;
}
