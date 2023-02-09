import { Index } from "../../../../src/decorator/Index";
import { BaseEntity, Column, Entity } from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { Message } from "./Message";
import { Locale } from "./Locale";
import { PrimaryColumn } from "../../../../src";

@Entity()
@Index(["locale", "message"], { unique: true })
export class Translation extends BaseEntity {
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
