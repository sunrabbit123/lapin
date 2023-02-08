import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
} from "../../../../src/index";
import { Photo } from "./Photo";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Photo, (photo) => photo.author)
    photos: Photo[];
}
