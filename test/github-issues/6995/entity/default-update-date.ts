import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    BaseEntity,
} from "../../../../src";

@Entity()
export class DefaultUpdateDate extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int",
    })
    public id: number;

    @CreateDateColumn()
    public createdDate: Date;

    @UpdateDateColumn()
    public updatedDate: Date;
}
