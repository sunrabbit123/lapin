import { BaseEntity, Entity, PrimaryColumn } from "../../../../src";

@Entity()
export class Session extends BaseEntity {
    @PrimaryColumn({
        comment: "That's the way the cookie crumbles",
    })
    cookie: string = "";
}
