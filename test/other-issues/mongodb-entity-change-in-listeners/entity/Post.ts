import { BaseEntity, Column, Entity } from "../../../../src";
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
