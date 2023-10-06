import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

@Directive({
  selector: '[ngIfNot]',
})
export class IfNotDirective {
  constructor(
    private viewcontainer: ViewContainerRef, // direktifin uygulandığı elementin kendisi (parent)
    private templateRef: TemplateRef<any> // uygulanan elementin alt elementleri (template'i) childları
  ) {}

  @Input()
  set ngIfNot(condition: boolean) {
    if (condition == false) {
      this.viewcontainer.clear();
      this.viewcontainer.createEmbeddedView(this.templateRef);
      //this.viewcontainer.createComponent(NotFoundComponent);
    }
  }
}
