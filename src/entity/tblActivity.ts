import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tblActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tags: string;

  @Column()
  likeNum: number;

  @Column()
  writer: string;

  @Column()
  logTime: number;

  @Column()
  comment: string;
}