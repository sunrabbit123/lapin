import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
} from "../../../../src/index";

import { Tournament } from "./Tournament";

@Entity()
export class TournamentGraph extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne((type) => Tournament, (tournament) => tournament.graph)
    public tournament: Tournament;
}
