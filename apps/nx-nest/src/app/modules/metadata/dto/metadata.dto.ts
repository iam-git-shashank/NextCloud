// src/metadata/dto/create-object.dto.ts

import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsMimeType,
} from 'class-validator';

export class CreateObjectDto {
  @IsUUID()
  id!: string;

  @IsString()
  @IsNotEmpty()
  bucket!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsMimeType()
  mimeType!: string;

  @IsNumber()
  @IsPositive()
  size!: number;

  @IsString()
  @IsNotEmpty()
  uploadedBy!: string;
}
