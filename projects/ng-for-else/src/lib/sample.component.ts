import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgForElseSampleService } from './sample.service';

@Component({
  selector: 'ng-for-else-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgForElseSampleComponent {
  constructor(public sampleService: NgForElseSampleService) {}
}
