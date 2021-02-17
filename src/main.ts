import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";

async function start() {
  if (environment.production) {
    enableProdMode();
  }

  const { AppModule } = await import("./app/app.module");
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}
start();
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
