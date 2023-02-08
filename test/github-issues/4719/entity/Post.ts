import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ObjectLiteral,
} from "../../../../src/index";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("hstore", { hstoreType: "object" })
    hstoreObj: ObjectLiteral;
}
