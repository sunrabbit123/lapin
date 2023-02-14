export type BaseTable<
    T extends object = object,
    Alias extends string = "",
> = T & {
    _alias: Alias;
};
