import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "../../../../src";

export class EmbeddedItem {
    @Column({ type: "integer", array: true })
    arrayInsideEmbedded: number[];
}

@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    someText: string;

    @Column((type) => EmbeddedItem)
    embedded: EmbeddedItem;
}
