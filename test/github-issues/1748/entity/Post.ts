import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ValueTransformer } from "../../../../src/decorator/options/ValueTransformer";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

export class Uuid {
    private value: string;

    constructor(value: string) {
        if (
            !/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(
                value,
            )
        ) {
            throw new Error("Invalid UUID format");
        }

        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }
}

class UuidTransformer implements ValueTransformer {
    to(value: Uuid): string {
        return value.getValue();
    }

    from(value: string): Uuid {
        return new Uuid(value);
    }
}

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn({ type: "uuid", transformer: new UuidTransformer() })
    id: Uuid;

    @Column()
    title: string;

    constructor(id: Uuid) {
        this.id = id;
    }
}
