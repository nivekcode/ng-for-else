import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { NgForElse } from '../../../ng-for-else/src/lib/ng-for-else.directive';

import { ArrayExmpleComponent } from './array-example/array-exmple.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HighlightModule,
    NgForElse,
    ArrayExmpleComponent,
    ObservableExampleComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: async () => await import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
