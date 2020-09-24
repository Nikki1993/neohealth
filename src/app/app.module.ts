import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFirestore,
  AngularFirestoreModule,
  SETTINGS,
} from "@angular/fire/firestore";
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance';
import { NgImageSliderModule } from 'ng-image-slider';
import { ServiceWorkerModule } from "@angular/service-worker";
import { HttpClientModule } from '@angular/common/http';

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { WarningDialogComponent } from "./components/warning-dialog/warning-dialog.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { StoreTransLoader } from "./firebase/firestore.loader";
import { NeohealthMaterialModule } from "./modules/material.module";
import { HomeComponent } from "./components/main/home/home.component";
import { ServicesComponent } from "./components/main/services/services.component";
import { BrandComponent } from "./components/main/brand/brand.component";
import { AboutComponent } from "./components/main/about/about.component";
import { PriceDialogComponent } from "./components/price-dialog/price-dialog.component";
import { ContactComponent } from "./components/main/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    WarningDialogComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    ServicesComponent,
    BrandComponent,
    AboutComponent,
    PriceDialogComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgImageSliderModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    NeohealthMaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirePerformanceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: StoreTransLoader,
        deps: [AngularFirestore],
      },
    }),
  ],
  entryComponents: [WarningDialogComponent, PriceDialogComponent],
  providers: [AngularFirestore, { provide: SETTINGS, useValue: {} }, PerformanceMonitoringService],
  bootstrap: [AppComponent],
})
export class AppModule {}
