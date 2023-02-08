import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Request } from "./Request";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne((type) => Request, {
        cascade: true,
    })
    @JoinColumn()
    request: Request;
}
