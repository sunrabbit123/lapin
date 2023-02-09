import { Name, NameEntitySchema } from "./Name";
import { BaseEntity, EntitySchema } from "../../../../../../src";

export interface User extends BaseEntity {
    id: string;
    name: Name;
    isActive: boolean;
}

export const UserEntitySchema = new EntitySchema<User>({
    name: "user",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        isActive: {
            type: Boolean,
        },
    },
    embeddeds: {
        name: {
            schema: NameEntitySchema,
            prefix: "name_",
        },
    },
});
