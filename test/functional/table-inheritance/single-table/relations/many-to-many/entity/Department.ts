import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { ManyToMany } from "../../../../../../../src/decorator/relations/ManyToMany";
import { Accountant } from "./Accountant";

@Entity()
export class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Accountant, (accountant) => accountant.departments)
    accountants: Accountant[];
}
