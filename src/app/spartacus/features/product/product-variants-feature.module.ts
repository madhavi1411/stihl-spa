import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";
import { productVariantsTranslationChunksConfig, productVariantsTranslations } from "@spartacus/product/variants/assets";
import { ProductVariantsRootModule } from "@spartacus/product/variants/root";

@NgModule({
  declarations: [],
  imports: [
    ProductVariantsRootModule
  ],
  providers: []
})
export class ProductVariantsFeatureModule { }
