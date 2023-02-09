import {
    BaseEntity,
    Column,
    Entity,
    Index,
    PrimaryColumn,
} from "../../../../src";

enum ExternalUserProvider {
    A = "A",
    B = "B",
    C = "C",
}

@Entity()
export class TestEntity extends BaseEntity {
    @PrimaryColumn({
        name: "provider",
        type: "enum",
        enumName: "external_user_provider",
        enum: ExternalUserProvider,
    })
    @Index()
    public provider!: ExternalUserProvider;

    @Column({
        type: "enum",
        enumName: "external_user_provider",
        enum: ExternalUserProvider,
        array: true,
    })
    public provider2!: ExternalUserProvider;
}
