import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BeforeUpdate } from "../../../../src/decorator/listeners/BeforeUpdate";
import { UpdateDateColumn } from "../../../../src/decorator/columns/UpdateDateColumn";
import { AfterLoad, ObjectIdColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    active: boolean;

    @UpdateDateColumn()
    updateDate: Date;

    @BeforeUpdate()
    async beforeUpdate() {
        this.title += "!";
    }

    loaded: Boolean = false;

    @AfterLoad()
    async afterLoad() {
        this.loaded = true;
    }
}
