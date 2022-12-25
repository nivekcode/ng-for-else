import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private AVAILABLE_DWARF_CLASSES = ['Driller', 'Engineer', 'Gunner', 'Scout'];
  dwarfClasses = [...this.AVAILABLE_DWARF_CLASSES];

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
