import { Column, Entity } from "../../../../src";

@Entity()
export class Product extends BaseEntity {
    @Column({ primary: true })
    id: number;

    @Column()
    name: string;
}
