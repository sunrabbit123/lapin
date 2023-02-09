import { BaseEntity } from "../../../../../src";

export interface Question extends BaseEntity {
    id?: number;
    title?: string;
    type: string;
}
