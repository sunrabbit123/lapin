import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    BaseEntity,
} from "../../../../src";
import { TipoCliente } from "./tipo-cliente";

@Entity()
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @ManyToOne(() => TipoCliente, (tc) => tc.clientes)
    @JoinColumn({ name: "tipoCliente" })
    tipo: TipoCliente;
}
