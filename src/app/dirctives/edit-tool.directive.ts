import { Directive, ElementRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TextEditorComponent } from '../text-editor/text-editor.component';

@Directive({
  selector: '[appEditTool]'
})
export class EditToolDirective {

  // constructor(el: ElementRef, private renderer: Renderer2) {
  //   // console.log("TCL: EditToolDirective -> constructor -> el", el)
  //   // const child = document.createElement('app-text-editor');
  //   // this.renderer.appendChild(el.nativeElement.parentElement, child);
  // }

  constructor(el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
    //factory for creating TextEditorComponent's 
    const editorCmpFactory = this.componentFactoryResolver.resolveComponentFactory(TextEditorComponent);

    const compRef = viewContainerRef.createComponent(editorCmpFactory); //viewContainerRef is the location
    (<TextEditorComponent>compRef.instance).inputControlled = el;
  }

}
