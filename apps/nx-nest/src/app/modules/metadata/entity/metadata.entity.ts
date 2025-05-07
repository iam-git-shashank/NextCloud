// src/metadata/entities/object-metadata.entity.ts

import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('object_metadata')
export class ObjectMetadataEntity {
  @PrimaryColumn('uuid')
  id!: string; // objectId from API service

  @Column()
  bucket!: string;

  @Column()
  name!: string; // original filename

  @Column()
  mimeType!: string;

  @Column('bigint')
  size!: number; // in bytes

  @Column({ nullable: true })
  uploadedBy!: string; // user ID (optional)

  @CreateDateColumn()
    createdAt: Date = new Date();
    
  @UpdateDateColumn()
  updatedAt= new Date();
}
