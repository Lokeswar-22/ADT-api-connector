import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

@Injectable()
export class TicketsService {
  private client;

  constructor() {
    const cookieJar = new CookieJar();
    this.client = wrapper(
      axios.create({
        jar: cookieJar,
        withCredentials: true,
      }),
    );
  }

  async fetchTickets() {
    try {
      await this.client.post('http://103.173.112.39:9090/adt/services/rest/v3/sessions', {
        username: 'admin',
        password: 'admin',
        scope: 'ui',
      });

      const response = await this.client.get(
        'http://103.173.112.39:9090/adt/services/rest/v3/processes/CorrectiveMaint/instances',
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        `Error making API call: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async createTicket(ticketData: any) {
    try {
      // Login and set cookies
      await this.client.post('http://103.173.112.39:9090/adt/services/rest/v3/sessions', {
        username: 'admin',
        password: 'admin',
        scope: 'ui',
      });

      // Make the POST request to create a ticket
      const response = await this.client.post(
        'http://103.173.112.39:9090/adt/services/rest/v3/processes/CorrectiveMaint/instances',
        ticketData,
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        `Error creating ticket: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}