import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

@Injectable()
export class DevicesService {
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
  
    async fetchDevices() {
      try {
        await this.client.post('http://103.173.112.39:9090/adt/services/rest/v3/sessions', {
          username: 'admin',
          password: 'admin',
          scope: 'ui',
        });
  
        const response = await this.client.get(
          'http://103.173.112.39:9090/adt/services/rest/v3/classes/Device/cards',
        );
  
        return response.data;
      } catch (error) {
        throw new HttpException(
          `Error making API call: ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
}
