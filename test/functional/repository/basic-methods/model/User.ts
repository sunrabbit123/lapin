import { BaseEntity } from "../../../../../src";

export interface User extends BaseEntity {
    id?: number | null;
    firstName?: string;
    secondName?: string;
}
