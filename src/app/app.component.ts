import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { DialogData } from './card-dialog/card-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-nft-template';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    console.log('inside');
    this.dialog.open(CardDialogComponent,{
      data: { card:{
        color: 'Blue'

             }
      },
      scrollStrategy: new NoopScrollStrategy()
    });
  }
}

