import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { EditToolDirective } from './dirctives/edit-tool.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    EditToolDirective
  ],
  entryComponents: [TextEditorComponent],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
