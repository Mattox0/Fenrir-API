import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ServerSuggest {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "varchar", unique: true, nullable: true })
    channel_id: string;
}