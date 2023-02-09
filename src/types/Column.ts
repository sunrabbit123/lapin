export type Field = number | string | boolean | Date | null;

export module Field {
    export type ValueType<Type extends Field> = Type extends string
        ? Type
        : Type extends Date
        ? Date | string
        : Type;
}
