import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { MatDialog } from "@angular/material/dialog";
import { WarningDialogComponent } from "./components/warning-dialog/warning-dialog.component";
import { setupPage } from "csstips/lib";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { ServiceWorkerUpdateService } from "./services/service-worker-update.service";

setupPage("#root");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  state = "pending";
  loading = new BehaviorSubject(true);
  title: string;
  body: string;

  constructor(
    private deviceService: DeviceDetectorService,
    public warningDialog: MatDialog,
    private translate: TranslateService,
    private serviceWorkerUpdateService: ServiceWorkerUpdateService
  ) {
    translate.setDefaultLang("en");
    translate.use(translate.getBrowserLang());
    translate
      .stream("browser-warning")
      .subscribe(({ title, body }: { title: string; body: string }) => {
        this.title = title;
        this.body = body;
        this.loading.next(false);
        this.state = "done";
      });
  }
  ngOnInit() {
    const { browser } = this.deviceService.getDeviceInfo();
    this.loading.subscribe(value => {
      if (!value && browser === "ie") {
        this.warningDialog.open(WarningDialogComponent, {
          width: "400px",
          height: "500px",
          data: {
            title: this.title,
            body: this.body,
            icon: "assets/error.svg"
          },
          role: "alertdialog",
          disableClose: true,
          panelClass: "panel-browser",
          backdropClass: "backdrop-browser",
          autoFocus: false
        });
      }
    });
  }
}
