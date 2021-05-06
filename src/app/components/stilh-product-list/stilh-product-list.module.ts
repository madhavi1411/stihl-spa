import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StilhProductListComponent } from './stilh-product-list.component';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
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
import { StihlProductGridItemModule } from './stihl-product-grid/stihl-product-grid-item.module';



@NgModule({
  declarations: [StilhProductListComponent],
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
    StihlProductGridItemModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SearchResultsListComponent: {
          component: StilhProductListComponent,
        },
        CMSProductListComponent: {
          component: StilhProductListComponent,
        },
      },
    } as CmsConfig),
  ]
})
export class StilhProductListModule { }
