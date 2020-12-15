import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  logger(message: unknown): void {
    console.log('message loggué', message);
  }
}
