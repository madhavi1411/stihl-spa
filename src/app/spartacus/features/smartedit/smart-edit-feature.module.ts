import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { SmartEditRootModule } from "@spartacus/smartedit/root";

@NgModule({
  declarations: [],
  imports: [
    SmartEditRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      smartEdit: {
        module: () =>
          import('@spartacus/smartedit').then((m) => m.SmartEditModule),
      },
    }
  })]
})
export class SmartEditFeatureModule { }
