import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgForElseSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
