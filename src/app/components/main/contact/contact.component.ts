import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { TranslateService } from "@ngx-translate/core";

interface ITranslationContact {
  title?: string;
  items?: IItem[];
}

interface IItem {
  link?: string;
  name?: string;
  tag?: string;
  icon?: string;
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  values: ITranslationContact = {};

  constructor(
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    this.translate
      .stream("contact")
      .subscribe((values: ITranslationContact) => {
        this.values = values;
        this.values.items.forEach((item: IItem) => {
          this.matIconRegistery.addSvgIcon(
            item.name,
            this.domSanitizer.bypassSecurityTrustResourceUrl(item.icon)
          );
        });
      });
  }

  openLink(link: string) {
    if (!link) {
      return;
    }
    window.open(link, "_blank", "noopener noreferrer");
  }
}
