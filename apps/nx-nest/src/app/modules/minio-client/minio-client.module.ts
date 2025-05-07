import { Module } from '@nestjs/common';
import { MinioClientService } from './minio-client.service';
import { MinioClientController } from './minio-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadedFile } from './entity/Post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UploadedFile])],
  providers: [MinioClientService],
  controllers: [MinioClientController],
  exports: [MinioClientService],
})
export class MinioClientModule {}
