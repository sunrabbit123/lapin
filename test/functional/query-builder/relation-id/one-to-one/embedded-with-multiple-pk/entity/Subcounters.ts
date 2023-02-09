import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryColumn } from "../../../../../../../src/decorator/columns/PrimaryColumn";
import { OneToOne } from "../../../../../../../src/decorator/relations/OneToOne";
import { JoinColumn } from "../../../../../../../src/decorator/relations/JoinColumn";
import { User } from "./User";

export class Subcounters extends BaseEntity {
    @PrimaryColumn()
    version: number;

    @Column()
    watches: number;

    @OneToOne((type) => User)
    @JoinColumn()
    watchedUser: User;

    watchedUserId: number;
}
