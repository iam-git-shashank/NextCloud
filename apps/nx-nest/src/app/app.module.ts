import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MinioClientModule } from './modules/minio-client/minio-client.module';
import { PostsModule } from './modules/posts/posts.module';
import { UploadedFile } from './modules/minio-client/entity/Post.entity';
import { AuthenticationModule } from './modules/auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'Nxdatabase',
      entities: [UploadedFile],

      synchronize: true, // Don't use in production
    }),
    MinioClientModule,
    PostsModule,
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
