import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ImageInfo } from "./ImageInfo";
import { OneToMany } from "../../../../../src/decorator/relations/OneToMany";

@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany((type) => ImageInfo, (imageInfo) => imageInfo.image)
    informations: ImageInfo[] = [];
}
