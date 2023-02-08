import { Entity } from "../../../../src";
import { PrimaryColumn } from "../../../../src";
import { CreateDateColumn, UpdateDateColumn } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @CreateDateColumn()
    created_at: number;

    @UpdateDateColumn()
    updated_at: string;
}
