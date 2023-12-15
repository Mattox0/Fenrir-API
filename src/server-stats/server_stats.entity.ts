import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ServerStats {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "integer", unique: true, nullable: true })
    stats_id: string;

    @Column({ type: "text", unique: true, nullable: true })
    stats_message: string;

    @Column({ type: "integer", unique: true, nullable: true })
    bot_id: string;

    @Column({ type: "text", unique: true, nullable: true })
    bot_message: string;

    @Column({ type: "integer", unique: true, nullable: true })
    online_id: string;

    @Column({ type: "text", unique: true, nullable: true })
    online_message: string;
}