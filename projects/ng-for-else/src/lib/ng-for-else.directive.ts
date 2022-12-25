import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Host,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { NgForOf } from '@angular/common';

@Directive({
  selector: '[ngForElse]',
  standalone: true,
})
export class NgForElse implements DoCheck {
  @Input('ngForElse') elseTemplate!: TemplateRef<any>;
  private viewRef: EmbeddedViewRef<any> | undefined | null;

  constructor(
    @Host() private ngFor: NgForOf<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngDoCheck(): void {
    const itemsLength = (this.ngFor as any)?._ngForOf?.length;
    if (!itemsLength) {
      if (this.viewRef) {
        return;
      }
      this.viewRef = this.viewContainerRef.createEmbeddedView(
        this.elseTemplate
      );
    } else if (this.viewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.viewRef));
      this.viewRef = null;
    }
  }
}
