import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BeforeUpdate } from "../../../../src/decorator/listeners/BeforeUpdate";
import { UpdateDateColumn } from "../../../../src/decorator/columns/UpdateDateColumn";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    active: boolean;

    @UpdateDateColumn()
    updateDate: Date;

    @BeforeUpdate()
    beforeUpdate() {
        this.title += "!";
    }
}
