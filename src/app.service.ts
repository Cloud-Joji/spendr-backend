import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): { status: string } {
    return { status: 'This is the principal route of spendr-backend!' };
  }
}
