import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatConfrimDialogComponent } from '../mat-confrim-dialog/mat-confrim-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string) {
    return this.dialog.open(MatConfrimDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      position: {
        top: '10px'
      },
      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
