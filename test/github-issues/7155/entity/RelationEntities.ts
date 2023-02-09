import {
    BaseEntity,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
} from "../../../../src";

@Entity()
export class Relation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}

@Entity()
export class OtherRelation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}

@Entity()
@Tree("closure-table")
export class RelationClosure extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @TreeChildren()
    children: RelationClosure[];

    @TreeParent()
    parent: RelationClosure;

    @OneToOne(() => Relation, { nullable: false })
    @JoinColumn()
    relation: Relation;

    @OneToOne(() => OtherRelation, { cascade: true })
    @JoinColumn()
    otherRelation: OtherRelation;
}

@Entity()
@Tree("nested-set")
export class RelationNested extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @TreeChildren()
    children: RelationNested[];

    @TreeParent()
    parent: RelationNested;

    @OneToOne(() => Relation, { nullable: false })
    @JoinColumn()
    relation: Relation;

    @OneToOne(() => OtherRelation, { cascade: true })
    @JoinColumn()
    otherRelation: OtherRelation;
}

@Entity()
@Tree("materialized-path")
export class RelationMaterialized extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @TreeChildren()
    children: RelationMaterialized[];

    @TreeParent()
    parent: RelationMaterialized;

    @OneToOne(() => Relation, { nullable: false })
    @JoinColumn()
    relation: Relation;

    @OneToOne(() => OtherRelation, { cascade: true })
    @JoinColumn()
    otherRelation: OtherRelation;
}
