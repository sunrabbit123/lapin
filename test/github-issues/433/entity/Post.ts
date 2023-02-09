import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({
        type: "json",
        default: { hello: "world" },
    })
    json: any;
}
