import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tblImages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bytea' })
  image: Buffer;
}