import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  public slogan: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.stream("app-home").subscribe(({ slogan }: { slogan: string }) => {
      this.slogan = slogan;
    });
  }

}
