import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { DevicesModule } from './devices/devices.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [TicketsModule, DevicesModule, AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
