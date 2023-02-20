export type BaseTable<
  T extends object,
  Alias extends string | undefined,
> = (T extends infer Table
  ? { _alias: "" } extends Table
    ? Omit<Table, "_alias">
    : Table
  : {}) & {
  _alias: undefined extends Alias ? "" : Alias;
};

type Some = BaseTable<{}, "A">;
//   ^?
type Some2 = BaseTable<{}, undefined>;
//   ^?
type Some3 = BaseTable<Some2, "C">;
//   ^?
