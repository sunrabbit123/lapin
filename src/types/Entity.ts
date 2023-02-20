export type EntityTarget<Entity extends object> =
  | { type: Entity; name: string }
  | string
  | Entity;
