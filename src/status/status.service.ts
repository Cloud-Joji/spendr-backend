import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  getStatus(): { status: string } {
    return { status: 'The services of spendr are up!' };
  }
}
