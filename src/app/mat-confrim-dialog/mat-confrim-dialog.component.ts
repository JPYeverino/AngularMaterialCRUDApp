import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-mat-confrim-dialog',
  templateUrl: './mat-confrim-dialog.component.html',
  styleUrls: ['./mat-confrim-dialog.component.css']
})
export class MatConfrimDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<MatConfrimDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
