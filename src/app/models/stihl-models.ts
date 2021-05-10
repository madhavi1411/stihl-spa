import { Product } from '@spartacus/core';
import {Image} from '@spartacus/core';

export interface StihlImage extends Image{
    mamId:String,
    mamType:String
}

export interface StihlImages {
    [imageType: string]: StihlImageGroup | StihlImageGroup[];
}

export interface StihlImageGroup {
    [format: string]: StihlImage;
}

export interface StihlProduct extends Product{
    stihlimages?: StihlImage[];
}

