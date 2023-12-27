import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Server {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "varchar", nullable: true })
    name: string;

    @Column({ type: "boolean", nullable: false, default: false })
    deleted: boolean;
}