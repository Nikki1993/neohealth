import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-price-dialog",
  templateUrl: "./price-dialog.component.html",
  styleUrls: ["./price-dialog.component.scss"]
})
export class PriceDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PriceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [{ name: string, price: number }]) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
