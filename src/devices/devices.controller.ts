import { Controller, Get } from '@nestjs/common';
import { DevicesService } from './devices.service';

@Controller('devices')
export class DevicesController {
    constructor(
        private readonly deviceservice : DevicesService
    ){}

    @Get()
    async getTickets() {
      return await this.deviceservice.fetchDevices();
    }
  
}
