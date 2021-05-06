import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ProductImageNormalizer } from "@spartacus/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StihlProductGridItemModule } from "./components/stilh-product-list/stihl-product-grid/stihl-product-grid-item.module";
import { StilhProductListModule } from "./components/stilh-product-list/stilh-product-list.module";
import { StihlProductImageNormalizer } from "./services/normalizer/stihl-product-image-normalizer";

import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    StilhProductListModule,
    StihlProductGridItemModule
  ],
  providers: [
    {
      provide: ProductImageNormalizer,
      useExisting: StihlProductImageNormalizer
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
