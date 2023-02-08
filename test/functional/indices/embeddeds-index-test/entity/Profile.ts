import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Index } from "../../../../../src/decorator/Index";

export class Profile {
    @Column()
    job: string;

    @Column()
    @Index("customer_profile_address")
    address: string;
}
