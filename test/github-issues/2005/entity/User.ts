import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "tinyint",
        transformer: {
            from: (val) => !!val,
            to: (val) => val,
        },
    })
    activated: boolean;
}
