import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class UploadedFile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  filename!: string;

  @Column()
  url!: string;

  @Column()
  mimetype!: string;

  @Column()
  size!: number;

  @CreateDateColumn()
  uploadedAt: Date = new Date();
}
