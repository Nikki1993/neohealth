import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { PriceDialogComponent } from "../../price-dialog/price-dialog.component";
import { TranslateService } from "@ngx-translate/core";

interface ITranslationPrices {
  name?: string;
  description?: string;
  price?: string;
}

interface ITranslatationValue {
  description?: string;
  icon?: string;
  subtitle?: string;
  title?: string;
  prices?: ITranslationPrices[];
}

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})

export class ServicesComponent implements OnInit {
  values: ITranslatationValue[] = [];
  options = {
    autoHide: false,
    forceVisible: true
  };

  constructor(
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
    private translate: TranslateService
  ) {
    this.matIconRegistery.addSvgIcon(
      "money",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "/assets/services/price.svg"
      )
    );
  }

  ngOnInit() {
    this.translate.stream("services").subscribe((values: ITranslatationValue[]) => {
      this.values = values;
    });
  }

  showPrices(prices: ITranslationPrices[]) {
    this.dialog.open(PriceDialogComponent, {
      width: "450px",
      height: "400px",
      panelClass: "price-list",
      autoFocus: false,
      data: prices
    });
  }
}
