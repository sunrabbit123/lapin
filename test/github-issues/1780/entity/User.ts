import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Index } from "../../../../src/decorator/Index";
@Entity()
@Index("unique_idx", ["first_name", "last_name"], { unique: true })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 100 })
    first_name: string;
    @Column({ length: 100 })
    last_name: string;
    @Column({ length: 100 })
    is_updated: string;
}
