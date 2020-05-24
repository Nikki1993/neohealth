import { AngularFirestore } from "@angular/fire/firestore";
import { TranslateLoader } from "@ngx-translate/core";

export class FirebaseTransLoader implements TranslateLoader {
  constructor(private store: AngularFirestore) {}

  // limitation of the library currently iis that it does not update new translations unless full page reload happens
  public getTranslation(lang: string) {
    switch (lang) {
      case "en":
        return this.store
          .collection("translations")
          .doc("english")
          .valueChanges();
      case "fi":
        return this.store
          .collection("translations")
          .doc("finnish")
          .valueChanges();
      case "ru":
        return this.store
          .collection("translations")
          .doc("russian")
          .valueChanges();
      default:
        return this.store
          .collection("translations")
          .doc("english")
          .valueChanges();
    }
  }
}

export const StoreTransLoader = (store: AngularFirestore) => {
  return new FirebaseTransLoader(store);
};
