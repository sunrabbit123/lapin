import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    BaseEntity,
} from "../../../../src";
import { Photo } from "./Photo";

@Entity()
export class PhotoMetadata extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    height: number;

    @Column("int")
    width: number;

    @Column()
    orientation: string;

    @Column()
    compressed: boolean;

    @Column()
    comment: string;

    @OneToOne((type) => Photo, (photo) => photo.metadata)
    photo: Photo;
}
