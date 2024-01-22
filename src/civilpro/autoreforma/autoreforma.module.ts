import { Controller, Module } from '@nestjs/common';
import { AutoreformaService } from './Services/autoreforma.service';
import { AutoreformaController } from './Controllers/autoreforma.controller';

@Module({
  providers: [AutoreformaService]  ,
  controllers: [AutoreformaController],
})

export class AutoreformaModule {}
