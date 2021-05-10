import { ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '@spartacus/core';
import { MediaContainer, MediaService } from '@spartacus/storefront';
import { Media } from '@spartacus/storefront';
import { MediaComponent } from '@spartacus/storefront';
import { StihlImage, StihlImages, StihlProduct } from 'src/app/models/stihl-models';

@Component({
  selector: 'app-stihl-product-image',
  templateUrl: './stihl-product-image.component.html',
  styleUrls: ['./stihl-product-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StihlProductImageComponent extends MediaComponent implements OnChanges {

  /**
   * The media container can hold multiple media items, so that
   * a specific media (by format) can be used or multiple media
   * can be provided in a `srcset` so the browser will figure out
   * the best media for the device.
   */
  @Input() container: MediaContainer;

  @Input() product: StihlProduct;

  /**
   * if a media format is given, a media for the given format will be rendered
   */
  @Input() format: string;

  /**
   * A specific alt text for an image, which overrules the alt text
   * from the container data.
   */
  @Input() alt: string;

  /**
   * Once the media is loaded, we emit an event.
   */
  @Output() loaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * The `cx-media` component has an `is-initialized` class as long as the
   * media is being initialized.
   */
  @HostBinding('class.is-initialized') isInitialized = false;

  /**
   * The `cx-media` component has a `is-loading` class as long as the
   * media is loaded. Wehn the media is loaded, the `is-initialized` class
   * is added.
   */
  @HostBinding('class.is-loading') isLoading = true;

  /**
   * When there's no media provided for the content, or in case an error
   * happened during loading, we add the `is-missing` class. Visual effects
   * can be controlled by CSS.
   */
  @HostBinding('class.is-missing') isMissing = false;


  media: Media;
  src: string;
  // images: StihlImage[];

  ngOnChanges(): void {
    this.create();
  }

  protected create(): void {
      this.src = this.product.stihlimages && this.product.stihlimages[0].url;
  }

//https://www.stihl.fr/content/dam/stihl/mam/modell-landscape/8dd431ee4b734483a06c3aee9b2305e7.jpg
}
