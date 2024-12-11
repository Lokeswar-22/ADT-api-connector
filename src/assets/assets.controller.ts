import { Controller, Get } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
    constructor(
        private readonly assetService : AssetsService
    ){}

    @Get()
    async getTickets() {
      return await this.assetService.fetchAssets();
    }

}
