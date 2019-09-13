import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: "app-warning-dialog",
  templateUrl: "./warning-dialog.component.html",
  styleUrls: ["./warning-dialog.component.scss"]
})
export class WarningDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WarningDialogComponent>,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      body: string;
      icon: string;
    }
  ) {
    this.matIconRegistry.addSvgIcon("chrome", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/chrome.svg"));
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
