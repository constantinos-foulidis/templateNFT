import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { DialogData } from './card-dialog/card-dialog.component';
import { ShowMessageComponent } from './show-message/show-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-nft-template';
  data = { card:[{
                  src: 'assets/img/cards/red completed.png'

                },
                {
                  src: 'assets/img/cards/gold completed.png'

                },
                {
                  src: 'assets/img/cards/white completed.png'

                },
                {
                  src: 'assets/img/cards/blue completed.png'

                },
                {
                  src: 'assets/img/cards/green completed.png'

                },
                {
                  src: 'assets/img/cards/orange completed.png'

                },
                {
                  src: 'assets/img/cards/purple completed.png'

                },
                {
                  src: 'assets/img/cards/light blue.png'

                },
                {
                  src: 'assets/img/cards/pink completed.png'

                }
              ],
          }
  constructor(public dialog: MatDialog) {}
  openDialog(number: number) {
     console.log(this.data.card[number])
    this.dialog.open(CardDialogComponent,{
      data:this.data.card[number],
      scrollStrategy: new NoopScrollStrategy()
    });
  }
  openMessage(){
    this.dialog.open(ShowMessageComponent,{
      // scrollStrategy: new NoopScrollStrategy()
    });
  }
}

