import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Setting } from "./Setting";
import { OneToMany } from "../../../../../../src/decorator/relations/OneToMany";
import { BaseEntity } from "../../../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Setting, (setting) => setting.user, {
        cascade: true,
        eager: true,
    })
    settings: Setting[];
}
