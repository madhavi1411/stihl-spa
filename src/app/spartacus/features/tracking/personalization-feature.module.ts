import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { PersonalizationRootModule } from "@spartacus/tracking/personalization/root";

@NgModule({
  declarations: [],
  imports: [
    PersonalizationRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      personalization: {
        module: () =>
          import('@spartacus/tracking/personalization').then((m) => m.PersonalizationModule),
      },
    }
  })]
})
export class PersonalizationFeatureModule { }
