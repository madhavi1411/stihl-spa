import { Component, OnInit } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { ViewConfig } from '@spartacus/storefront';
import { PageLayoutService, ViewModes } from '@spartacus/storefront';
import { ProductListComponent } from '@spartacus/storefront';
import { ProductListComponentService } from '@spartacus/storefront';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stilh-product-list',
  templateUrl: './stilh-product-list.component.html',
  styleUrls: ['./stilh-product-list.component.scss']
})
export class StilhProductListComponent extends ProductListComponent {


  model$: Observable<ProductSearchPage> = this.stihlproductListComponentService.model$;

viewMode$ = new BehaviorSubject<ViewModes>(ViewModes.Grid);
ViewModes = ViewModes;

constructor(
  private stihlpageLayoutService: PageLayoutService,
  private stihlproductListComponentService: ProductListComponentService,
  public scrollConfig: ViewConfig
) {
  super(stihlpageLayoutService, stihlproductListComponentService, scrollConfig);
}

}
