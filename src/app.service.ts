import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const name = 'Shubham';
    return 'Hello World!';
  }
}
