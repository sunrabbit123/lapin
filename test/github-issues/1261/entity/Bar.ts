import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Foo } from "./Foo";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";

@Entity()
export class Bar extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => Foo, {
        onDelete: "SET NULL",
    })
    @JoinColumn()
    foo: Foo;
}
