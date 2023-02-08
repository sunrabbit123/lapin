import {
    BaseEntity,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ExampleText } from "./ExampleText";

@Entity()
export class Example extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToOne(() => ExampleText)
    @JoinColumn()
    exampleText: ExampleText;
}
