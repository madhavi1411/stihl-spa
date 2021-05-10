import { Injectable } from '@angular/core';
import { Images, Occ, Product, ProductImageNormalizer } from '@spartacus/core';
import { StihlImage, StihlImages, StihlProduct } from 'src/app/models/stihl-models';

@Injectable({providedIn: 'root'})
export class StihlProductImageNormalizer extends ProductImageNormalizer {

  convert(source: Occ.Product, target?: StihlProduct): StihlProduct {
    if (target === undefined) {
      target = {...(source as any)};
    }
    if (source.images) {
      target.stihlimages = this.normalizeStihlImages(source.images);
    }
    return target;
  }

  /**
   * @desc
   * Creates the image structure we'd like to have. Instead of
   * having a single list with all images despite type and format
   * we create a proper structure. With that we can do:
   * - images.primary.thumnail.url
   * - images.GALLERY[0].thumnail.url
   */
  normalizeStihlImages(source: any[]): StihlImage[] {
    const images = [];
    if (source) {
      for (const image of source) {
        console.log(image);
        images.push({
         ...image,
          url: this.normalizeStihlImageUrl(image)
        });
        // const isList = image.hasOwnProperty('galleryIndex');
        // if (!images.hasOwnProperty(image.imageType)) {
        //   images[image.imageType] = isList ? [] : {};
        // }

        // let imageContainer;
        // if (isList && !images[image.imageType][image.galleryIndex]) {
        //   images[image.imageType][image.galleryIndex] = {};
        // }

        // if (isList) {
        //   imageContainer = images[image.imageType][image.galleryIndex];
        // } else {
        //   imageContainer = images[image.imageType];
        // }

        // const targetImage = { ...image };
        // targetImage.url = this.normalizeStihlImageUrl(targetImage.url);
        // imageContainer[image.format] = targetImage;
      }
    }
    return images;
  }

  /**
   * Traditionally, in an on-prem world, medias and other backend related calls
   * are hosted at the same platform, but in a cloud setup, applications are are
   * typically distributed cross different environments. For media, we use the
   * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
   * if none provided.
   */
  private normalizeStihlImageUrl(image): string {
    const url = image.mamId;
    if (new RegExp(/^(http|data:image|\/\/)/i).test(url)) {
      return url;
    }
    const mamType = image.mamType.toLowerCase().replace('_', '-');
    return `https://www.stihl.fr/content/dam/stihl/mam/${mamType}/${url}.jpg`;
  }

}
