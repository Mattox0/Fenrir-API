import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Server {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "integer", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "integer", unique: true, nullable: true })
    ticket_id: string;

    @Column({ type: "integer", unique: true, nullable: true })
    suggest_id: string;
}