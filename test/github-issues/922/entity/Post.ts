import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src/index";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("hstore", { hstoreType: "object" })
    hstoreObj: Object;

    @Column("hstore", { hstoreType: "string" })
    hstoreStr: string;
}
