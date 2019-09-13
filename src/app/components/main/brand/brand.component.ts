import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface ITranslationBrands {
  title?: string;
  description?: string;
  images?: string[];
}

@Component({
  selector: 'app-brands',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  values: ITranslationBrands = { images: [] };

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.stream('brands').subscribe((values: ITranslationBrands) => {
      // @ts-ignore
      Modernizr.on('webp', (result: any) => {
        if (result && values.images) {
          values.images = values.images.map(val => {
            if (val.includes('.png')) {
              return val.replace('.png', '.webp');
            } else {
              return val.replace('.jpg', '.webp');
            }
          });
          this.values = values;
        } else {
          this.values = values;
        }
      });
    });
  }
}
