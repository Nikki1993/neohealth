import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

interface ITranslationBrands {
  title?: string;
  description?: string;
  images?: string[];
}

@Component({
  selector: "app-brands",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"],
})
export class BrandComponent implements OnInit {
  values: {title?: string; description?: string; images?: Array<{image: string; thumbImage: string; alt: string; title: string}>} = {};

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.stream("brands").subscribe(({ title, description, images }: ITranslationBrands) => {
      // @ts-ignore
      Modernizr.on("webp", (result: any) => {
        if (result && images) {
          images = images.map((val) => {
            if (val.includes(".png")) {
              return val.replace(".png", ".webp");
            } else {
              return val.replace(".jpg", ".webp");
            }
          });
        }
        this.values = { title, description, images: images.reduce((acc, val) => {
            return [...acc, { image: val, thumbImage: val, title: null, alt: null }];
          }, [])};
      });
    });
  }
}
