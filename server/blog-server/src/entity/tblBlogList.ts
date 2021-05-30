import { text } from 'express';
import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tblBlogList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({ type: 'text', default : null })
  abstract: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type:'text' ,default: null})
  content: string;

  @Column()
  logAdmin: string;

  @Column({type : 'int'})
  logTime: number;

  @Column()
  show: boolean;

  @Column({default : null})
  classified: string;
}