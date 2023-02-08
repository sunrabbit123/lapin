import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    BaseEntity,
} from "../../../../src";

import { Tournament } from "./Tournament";

@Entity()
export class TournamentGraph extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne((type) => Tournament, (tournament) => tournament.graph)
    public tournament: Tournament;
}
