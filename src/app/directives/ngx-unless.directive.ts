import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {
  visible = false;

  @Input()
  set ngxUnless(condition: boolean) {
    if(!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition && this.visible) {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  

}
