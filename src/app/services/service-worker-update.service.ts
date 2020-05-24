import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
  providedIn: "root",
})
export class ServiceWorkerUpdateService {
  constructor(swUpdate: SwUpdate, snackbar: MatSnackBar) {
    if (!swUpdate.isEnabled) {
      console.log("Service Worker is disabled 🙁");
    } else {
      console.log("Service Worker is enabled 😊 enjoy pawsome experience");
      swUpdate.checkForUpdate();

      swUpdate.available.subscribe((evt) => {
        const snack = snackbar.open("Update Available", "Reload");

        snack.onAction().subscribe(async () => {
          await swUpdate.activateUpdate();
          window.location.reload();
        });
      });
      swUpdate.activated.subscribe((event) => {
        console.log("old version was", event.previous);
        console.log("new version is", event.current);
      });
    }
  }
}
