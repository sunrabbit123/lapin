import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() name: string;
}
