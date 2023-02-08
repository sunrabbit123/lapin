import { BaseEntity, Entity, PrimaryColumn } from "../../../../src";

@Entity()
export class Book extends BaseEntity {
    @PrimaryColumn()
    ean: string;
}

@Entity({ withoutRowid: true })
export class Book2 {
    @PrimaryColumn()
    ean: string;
}
