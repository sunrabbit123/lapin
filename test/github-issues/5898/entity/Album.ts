import { Entity, OneToMany, PrimaryGeneratedColumn } from "../../../../src";
import { Photo } from "./Photo";

@Entity()
export class Album extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToMany(() => Photo, (photo) => photo.album, { onDelete: "CASCADE" })
    photos: Photo[];
}
