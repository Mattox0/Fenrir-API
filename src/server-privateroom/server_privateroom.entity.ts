import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ServerPrivateRoom {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    category_id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    channel_id: string;
}