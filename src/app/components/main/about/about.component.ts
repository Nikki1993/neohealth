import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MatDialog } from "@angular/material/dialog";

interface ITranslationAbout {
  button?: string;
  description?: string;
  title?: string;
  extended?: string;
}

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @ViewChild("read", { static: true }) div: ElementRef;
  values: ITranslationAbout = {};

  constructor(private translate: TranslateService, private dialog: MatDialog) {}

  ngOnInit() {
    this.div.nativeElement.style.display = "none";
    this.translate.stream("about").subscribe((values: ITranslationAbout) => {
      this.values = values;
    });
  }

  readMore() {
    if (this.div.nativeElement.style.display === "none") {
      this.div.nativeElement.style.display = "inline";
    } else {
      this.div.nativeElement.style.display = "none";
    }
  }
}
