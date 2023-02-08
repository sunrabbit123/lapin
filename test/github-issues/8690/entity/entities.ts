import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    JoinColumn,
    PrimaryColumn,
    BaseEntity,
} from "../../../../src";

// This is a contrived and silly example of a primary
// column transformer but it's enough to show the issue.
const WrappedIntTransformer = {
    from: (value: number) => `"${value}"`,
    to: (value: string | undefined | null) =>
        value ? parseInt(value.slice(1, value.length - 1)) : null,
};

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn({
        type: Number,
        transformer: WrappedIntTransformer,
        nullable: false,
    })
    id: string;

    @OneToMany(() => Photo, (photo) => photo.user)
    photos: Promise<Photo[]>;
}

@Entity()
export class Photo extends BaseEntity {
    @PrimaryColumn({
        type: Number,
        transformer: WrappedIntTransformer,
        nullable: false,
    })
    id: string;

    @Column()
    url: string;

    @Column({
        type: Number,
        transformer: WrappedIntTransformer,
        nullable: false,
    })
    userId: string;

    @ManyToOne(() => User, (user) => user.photos)
    @JoinColumn({ name: "userId", referencedColumnName: "id" })
    user: Promise<User>;
}
