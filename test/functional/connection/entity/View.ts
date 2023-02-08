import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity("view", { synchronize: false })
export class View {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;
}
