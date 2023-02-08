import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Image } from "./Image";

@Entity("sample10_image_details")
export class ImageDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    meta: string;

    @Column()
    comment: string;

    @OneToOne((type) => Image, (image) => image.details)
    image: Image;
}
