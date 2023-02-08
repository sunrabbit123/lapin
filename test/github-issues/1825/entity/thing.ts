import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

export class EmbeddedInThing {
    @Column()
    public someSeriouslyLongFieldNameFirst: number;

    @Column()
    public someSeriouslyLongFieldNameSecond: number;
}

@Entity()
export class Thing extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column((type) => EmbeddedInThing)
    public embeddedThing: EmbeddedInThing;
}
