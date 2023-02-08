import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ValueTransformer } from "../../../../../src/decorator/options/ValueTransformer";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";

class PhonesTransformer implements ValueTransformer {
    to(value: Map<string, number>): string {
        return JSON.stringify([...value]);
    }

    from(value: string): Map<string, number> {
        return new Map(JSON.parse(value));
    }
}

@Entity()
export class PhoneBook extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: String, transformer: new PhonesTransformer() })
    phones: Map<string, number>;
}
