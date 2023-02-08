import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { PostDetails } from "./PostDetails";
import { OneToOne } from "../../../../../src/decorator/relations/OneToOne";
import { JoinColumn } from "../../../../../src/decorator/relations/JoinColumn";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne((type) => PostDetails)
    @JoinColumn()
    details: PostDetails;

    @Column()
    title: string;
}
