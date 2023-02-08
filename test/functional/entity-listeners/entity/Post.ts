import { BeforeUpdate } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @BeforeUpdate()
    beforeUpdate() {
        this.title = this.title.trim();
    }
}
