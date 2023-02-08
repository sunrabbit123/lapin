import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

const transformer = {
    from(value: Date): number {
        return value.getTime();
    },
    to(value: number): Date {
        return new Date(value);
    },
};

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: Date, transformer })
    ts: number;
}
