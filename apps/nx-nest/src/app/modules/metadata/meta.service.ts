import { Injectable } from '@nestjs/common';
import { ObjectMetadataEntity } from './entity/metadata.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObjectDto } from './dto/metadata.dto';
@Injectable()
export class MetaService {
  constructor(
    @InjectRepository(ObjectMetadataEntity)
    private readonly fileRepository: Repository<ObjectMetadataEntity>
  ) {}
 

  async createObjectMetadata(dto: CreateObjectDto) {
    const metadata = this.fileRepository.create(dto);
    return this.fileRepository.save(metadata);
  }
}
