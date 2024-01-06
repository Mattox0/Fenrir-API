import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Hangman {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  word: string;

  @Column()
  difficulty: string;
}