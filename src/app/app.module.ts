import { HttpClientModule } from "@angular/common/http";
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
import { AngularFirePerformanceModule } from "@angular/fire/performance";
import { DeviceDetectorModule } from "ngx-device-detector";
import { SlideshowModule } from "ng-simple-slideshow";
import { ServiceWorkerModule } from "@angular/service-worker";

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
import { CovidComponent } from "./components/main/covid/covid.component";

import "firebase/performance";

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
    CovidComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    NeohealthMaterialModule,
    FlexLayoutModule,
    DeviceDetectorModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFirePerformanceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: StoreTransLoader,
        deps: [AngularFirestore],
      },
    }),
    SlideshowModule,
  ],
  entryComponents: [WarningDialogComponent, PriceDialogComponent],
  providers: [AngularFirestore, { provide: SETTINGS, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
