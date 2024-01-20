import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class FastType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  sentence: string;
}