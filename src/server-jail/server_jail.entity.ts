import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ServerJail {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "integer", unique: true, nullable: true })
    channel_id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    role_id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    admin_id: string;
}