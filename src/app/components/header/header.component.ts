import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  appBar: [{}];
  social: [{}];

  constructor(
    private translate: TranslateService,
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistery.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/social/facebook.svg"
      )
    );
    this.matIconRegistery.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/social/instagram.svg"
      )
    );
    this.matIconRegistery.addSvgIcon(
      "english",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/lang/english.svg"
      )
    );
    this.matIconRegistery.addSvgIcon(
      "finnish",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/lang/finnish.svg"
      )
    );
    this.matIconRegistery.addSvgIcon(
      "russian",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/lang/russian.svg"
      )
    );
  }

  changeLanguage(lang: string) {
    switch (lang) {
      case "english":
        return this.translate.use("en");
      case "finnish":
        return this.translate.use("fi");
      case "russian":
        return this.translate.use("ru");
    }
  }
}
