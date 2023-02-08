import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../../../src";

@Entity()
export class Breed extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
