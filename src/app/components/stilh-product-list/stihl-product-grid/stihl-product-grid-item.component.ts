import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ICON_TYPE, ProductGridItemComponent } from '@spartacus/storefront';
import { StihlProduct } from '../../../models/stihl-models';

@Component({
  selector: 'app-stihl-product-grid-item',
  templateUrl: './stihl-product-grid-item.component.html',
  styleUrls: ['./stihl-product-grid-item.component.scss']
})
export class StihlProductGridItemComponent extends ProductGridItemComponent {

  @Input() product: StihlProduct;
  iconTypes = ICON_TYPE;

}
