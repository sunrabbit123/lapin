import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { Message } from "./Message";

@Entity()
export class Locale extends BaseEntity {
    @PrimaryColumn("varchar", { length: 5 })
    code: string;

    @Column("varchar", { length: 50 })
    englishName: string;

    @OneToOne(() => Message, { onDelete: "SET NULL" })
    @JoinColumn()
    name: Message;
}
