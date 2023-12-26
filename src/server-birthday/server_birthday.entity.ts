import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ServerBirthday {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    guild_id: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    channel_id: string;

    @Column({ type: "varchar", unique: true, nullable: true })
    role_id: string;

    @Column({ type: "text", unique: true, nullable: true })
    description: string;

    @Column({ type: "text", unique: true, nullable: true })
    hour: string;
}