import { Entity, PrimaryGeneratedColumn, Column } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    constructor(user?: { name: string }) {
        if (user) {
            this.name = user.name;
        }
    }
}
