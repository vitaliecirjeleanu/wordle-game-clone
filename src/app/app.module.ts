import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { BoardGridComponent } from './board-grid/board-grid.component';
import { WordComponent } from './word/word.component';
import { ObjectValuesPipe } from './shared/object-values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    BoardGridComponent,
    WordComponent,
    ObjectValuesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
