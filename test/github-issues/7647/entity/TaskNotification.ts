import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
export enum TaskNotificationType {
    ASSIGNED,
}

@Entity("taskNotifications")
export class TaskNotification extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TaskNotificationType,
        enumName: "TaskNotificationType",
        default: TaskNotificationType.ASSIGNED,
    })
    type: TaskNotificationType;
}
