import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MinioClientService } from './minio-client.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadedFile as UploadedFileEntity } from './entity/Post.entity';
import { Repository } from 'typeorm';
import { authGuard } from '../auth/auth.gaurd';
@Controller('minio')
export class MinioClientController {
  constructor(
    private readonly minioService: MinioClientService,
    @InjectRepository(UploadedFileEntity)
    private readonly fileRepository: Repository<UploadedFileEntity>
  ) {}
  @UseGuards(authGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('hih');
    console.log(file.fieldname);
    const bucket = 'uploads';
    await this.minioService.uploadFile(
      bucket,
      file.originalname,
      file.buffer,
      file.mimetype,
      file.size
    );
    const fileUrl = `http://localhost:9001/${bucket}/${file.originalname}`;

    const uploadedFile = this.fileRepository.create({
      filename: file.originalname,
      url: fileUrl,
      mimetype: file.mimetype,
      size: file.size,
    });

    await this.fileRepository.save(uploadedFile);

    return {
      message: 'File uploaded successfully',
      url: fileUrl,
    };
  }

  @Delete('delete/:filename')
  async delete(@Param('filename') filename: string) {
    const bucket = 'my-bucket';
    return this.minioService.deleteFile(bucket, filename);
  }
}
