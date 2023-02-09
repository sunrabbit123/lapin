import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    constructor(user?: { name: string }) {
        super();
        if (user) {
            this.name = user.name;
        }
    }
}
