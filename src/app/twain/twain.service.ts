import { Injectable } from '@angular/core';

@Injectable()
export class TwainService {

  getQuote(): Promise<string> {
    return Promise.resolve('To be or not to be was not said by me!');
  }

}
