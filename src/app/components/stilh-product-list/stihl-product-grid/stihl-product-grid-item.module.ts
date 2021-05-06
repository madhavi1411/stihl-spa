import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StihlProductGridItemComponent } from './stihl-product-grid-item.component';
import { RouterModule } from '@angular/router';
import { MediaModule } from '@spartacus/storefront';
import { AddToCartModule } from '@spartacus/storefront';
import { ItemCounterModule } from '@spartacus/storefront';
import { ListNavigationModule } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';
import { I18nModule } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';
import { IconModule } from '@spartacus/storefront';
import { SpinnerModule } from '@spartacus/storefront';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewConfigModule } from '@spartacus/storefront';
import { ProductVariantsModule } from '@spartacus/storefront';
import { FeaturesConfigModule } from '@spartacus/core';
import { OutletModule } from '@spartacus/storefront';
import { ProductListModule } from '@spartacus/storefront';
import { StihlProductImageModule } from '../stihl-product-image/stihl-product-image.module';



@NgModule({
  declarations: [StihlProductGridItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    ViewConfigModule,
    ProductVariantsModule,
    FeaturesConfigModule,
    OutletModule,
    ProductListModule,
    StihlProductImageModule
  ],
  exports: [
    StihlProductGridItemComponent
  ]
})
export class StihlProductGridItemModule { }
