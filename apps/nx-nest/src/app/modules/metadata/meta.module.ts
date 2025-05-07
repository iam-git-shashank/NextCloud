import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ObjectMetadataEntity } from "./entity/metadata.entity";

@Module({
      imports: [TypeOrmModule.forFeature([ObjectMetadataEntity])],
    
    providers: [],
    controllers:[]
})
export class MetaModule {}