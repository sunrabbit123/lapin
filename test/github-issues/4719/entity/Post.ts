import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ObjectLiteral,
    BaseEntity,
} from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("hstore", { hstoreType: "object" })
    hstoreObj: ObjectLiteral;
}
