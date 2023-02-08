import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class TestCreate extends BaseEntity {
    constructor() {
        this.hasCalledConstructor = true;
    }

    hasCalledConstructor = false;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foo: string = "bar";
}
