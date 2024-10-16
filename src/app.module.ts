import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamp/bootcamp.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController],
  providers: [AppService],
})
export class AppModule {}
