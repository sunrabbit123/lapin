import { Index } from "../../../../src/decorator/Index";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Message } from "./Message";
import { Locale } from "./Locale";
import { PrimaryColumn } from "../../../../src";

@Entity()
@Index(["locale", "message"], { unique: true })
export class Translation {
    @PrimaryColumn()
    localeCode: string;

    @PrimaryColumn()
    messageId: string;

    @ManyToOne(() => Locale, { nullable: false })
    @JoinColumn()
    locale: Locale;

    @ManyToOne(() => Message, { nullable: false })
    @JoinColumn()
    message: Message;

    @Column("text")
    text: string;
}
