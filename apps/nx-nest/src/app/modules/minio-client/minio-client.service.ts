import { Injectable } from '@nestjs/common';
import {Client} from"minio"
@Injectable()
export class MinioClientService {
  private readonly minioClient: Client;

  constructor() {
    this.minioClient = new Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'minioadmin',
      secretKey: 'minioadmin123',
    });
  }

  async ensureBucket(bucket: string) {
    const exists = await this.minioClient.bucketExists(bucket);
    if (!exists) {
      await this.minioClient.makeBucket(bucket, 'us-east-1');
    }
  }

  async uploadFile(
    bucket: string,
    originalname: string,
    buffer: Buffer,
    mimetype: string,
    size:number
  ) {
    await this.ensureBucket(bucket);
   await this.minioClient.putObject(bucket, originalname, buffer,size,
      {
      'Content-Type': mimetype,
      }
    );
    const url=`http://localhost:9000/${bucket}/${originalname}`
    console.log(url)
  }

  async getFile(bucket: string, objectName: string) {
    return this.minioClient.getObject(bucket, objectName);
  }

  async deleteFile(bucket: string, objectName: string) {
    return this.minioClient.removeObject(bucket, objectName);
  }
}
