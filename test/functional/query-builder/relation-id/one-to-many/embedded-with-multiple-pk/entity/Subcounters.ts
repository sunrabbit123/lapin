import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryColumn } from "../../../../../../../src/decorator/columns/PrimaryColumn";
import { OneToMany } from "../../../../../../../src/decorator/relations/OneToMany";
import { User } from "./User";

export class Subcounters extends BaseEntity {
    @PrimaryColumn()
    version: number;

    @Column()
    watches: number;

    @OneToMany((type) => User, (user) => user.post)
    watchedUsers: User[];

    watchedUserIds: number[];
}
