export type EntityTarget<Entity extends object> =
  | { new (): Entity }
  | { type: Entity; name: string }
  | string
  | Entity;
