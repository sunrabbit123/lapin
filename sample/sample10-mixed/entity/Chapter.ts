import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../src";
import { PostDetails } from "./PostDetails";

@Entity("sample10_chapter")
export class Chapter extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    about: string;

    @OneToMany((type) => PostDetails, (postDetails) => postDetails.chapter)
    postDetails: PostDetails[];
}
