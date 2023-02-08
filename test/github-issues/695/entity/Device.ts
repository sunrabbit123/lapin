import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity("devices")
export class Device extends BaseEntity {
    @PrimaryColumn({
        name: "id",
        type: "char",
        length: "12",
    })
    id: string;

    @Column({
        name: "registration_token",
        type: "decimal",
        precision: 6,
        scale: 0,
    })
    registrationToken: string;
}
