import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  roll(pins: number): any {
    return 'Hello world';
  }

  score(): number {
    return 10;
  }
}
