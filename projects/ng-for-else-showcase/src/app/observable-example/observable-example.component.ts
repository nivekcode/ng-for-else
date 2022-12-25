import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { delay, startWith, Subject, switchMap, tap } from 'rxjs';
import { HighlightModule } from 'ngx-highlightjs';

import { NgForElse } from '../../../../ng-for-else/src/lib/ng-for-else.directive';

@Component({
  selector: 'observable-example',
  templateUrl: 'observable-example.component.html',
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgForElse, NgIf, HighlightModule],
})
export class ObservableExampleComponent {
  private AVAILABLE_DWARF_CLASSES = ['Driller', 'Engineer', 'Gunner', 'Scout'];

  private kickOffStream$ = new Subject<void>();
  private updateDwarfClasses$ = new Subject();
  loading = false;

  dwarfClasses$ = this.kickOffStream$.pipe(
    tap((_) => (this.loading = true)),
    delay(2000),
    tap((_) => (this.loading = false)),
    switchMap((_) =>
      this.updateDwarfClasses$.pipe(
        startWith([...this.AVAILABLE_DWARF_CLASSES])
      )
    )
  );

  loadDwarfClasses(): void {
    this.kickOffStream$.next();
  }

  reduceDwarfClasses(): void {
    this.updateDwarfClasses$.next(['Driller', 'Engineer']);
  }

  cleanup(): void {
    this.updateDwarfClasses$.next([]);
  }

  reset(): void {
    this.updateDwarfClasses$.next([...this.AVAILABLE_DWARF_CLASSES]);
  }

  observableUsageDemoCode = `
<ng-template #emptyListTemplate>
  <div class="bg-red-400 rounded-lg shadow-lg p-5 mt-3 border border-red-500 text-white">
    Empty list
  </div>
</ng-template>

<div class="bg-white rounded-lg shadow-lg p-5 mt-3 border border-slate-100"
  *ngFor="let dwarfClass of $any(dwarfClasses$ | async); else: emptyListTemplate">
  {{ dwarfClass }}
</div> 
  `;
}
