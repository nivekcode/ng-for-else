import { Component } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { NgForOf } from '@angular/common';
import { NgForElse } from '../../../../ng-for-else/src/lib/ng-for-else.directive';

@Component({
  selector: 'array-example',
  templateUrl: './array-example.component.html',
  standalone: true,
  imports: [HighlightModule, NgForOf, NgForElse],
})
export class ArrayExmpleComponent {
  private AVAILABLE_DWARF_CLASSES = ['Driller', 'Engineer', 'Gunner', 'Scout'];
  dwarfClasses = [...this.AVAILABLE_DWARF_CLASSES];
  arrayUsageDemoCode = `
<ng-template #emptyListTemplate>
  <div
    class="bg-red-400 rounded-lg shadow-lg p-5 mt-3 border border-red-500 text-white"
  >
    Empty list
  </div>
</ng-template>

<div
  class="bg-white rounded-lg shadow-lg p-5 mt-3 border border-slate-100"
  *ngFor="let dwarfClass of dwarfClasses; else: emptyListTemplate"
>
  {{ dwarfClass }}
</div>
`;

  reduceDwarfClasses(): void {
    this.dwarfClasses = ['Driller', 'Engineer'];
  }

  cleanup(): void {
    this.dwarfClasses = [];
  }

  reset(): void {
    this.dwarfClasses = [...this.AVAILABLE_DWARF_CLASSES];
  }
}
