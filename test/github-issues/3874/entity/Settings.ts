import { Entity, Column, PrimaryColumn } from "../../../../src";

enum Singleton {
    EMPTY = "",
}

@Entity()
export class Settings extends BaseEntity {
    @PrimaryColumn()
    readonly singleton: Singleton = Singleton.EMPTY;

    @Column()
    value!: string;
}
