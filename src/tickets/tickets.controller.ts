import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  async getTickets() {
    return await this.ticketsService.fetchTickets();
  }
  @Post()
  async createTicket(@Body() ticketData: CreateTicketDto) {
    return await this.ticketsService.createTicket(ticketData);
  }

}
