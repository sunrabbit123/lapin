import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ primaryKeyConstraintName: "PK_ID" })
    id: number;
}
