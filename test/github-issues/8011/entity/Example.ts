import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

enum Category {
    MensAndWomensClothing = "Men's and Women's Clothing",
    Footwear = "Footwear",
}

@Entity()
export class Example extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "enum", enum: Category })
    category: Category;
}
