import { Entity, Column, PrimaryGeneratedColumn } from "../../../../src";

export enum Realm {
    Blackrock = "Blackrock",
    KelThuzad = "Kel'Thuzad",
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: Realm })
    realm: Realm;
}
