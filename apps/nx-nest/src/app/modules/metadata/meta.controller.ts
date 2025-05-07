import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { MetaService } from "./meta.service";
import { CreateObjectDto } from "./dto/metadata.dto";

@Controller('metadata')
export class MetaController {
  constructor(private readonly metadataService: MetaService) {}
  @Post()
  postmeta(@Body(new ValidationPipe()) createDto: CreateObjectDto) {
    return this.metadataService.createObjectMetadata(createDto);
  }
}