import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { ShowMessageComponent } from './show-message/show-message.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDialogComponent,
    ShowMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
