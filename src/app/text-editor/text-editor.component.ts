import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  @Input() inputControlled: ElementRef;
  inputControlledStyle: CSSStyleDeclaration;

  constructor() { }

  ngOnInit() {
    this.inputControlledStyle = this.inputControlled.nativeElement.style;
  }

  colorChange(selected) {
    this.inputControlledStyle.color = selected.value;
  }

  fontChange(selected) {
    let value = selected.value + "px";

    this.inputControlledStyle.fontSize = value;
  }

  genFontSizes(start: number = 12, end: number = 36, jumps: number = 2) {
    let arr = [];
    for (start; start < end; start += jumps) {
      arr.push(start);
    }
    return arr;
  }

  rightToLeft() {
    this.inputControlledStyle.direction = "RTL";
  }

  leftToRight() {
    this.inputControlledStyle.direction = "LTR";

  }
}
