import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://cdcbc379a544.ngrok.io/',
        prefix: 'rest/v2',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      urlParameters: ['baseSite', 'language', 'currency'],
      currency: ['EUR',],
      language: ['fr_FR', 'en_GB'],
      baseSite: ['stihl-b2c-fr-spa', 'electronics-spa']
      },
      // context: {
      //   urlParameters: ['baseSite', 'language', 'currency'],
      //   baseSite: ['electronics-spa','apparel-uk-spa','powertools-spa'],
      //   currency: ['USD', 'GBP',]
      // },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '3.2'
    }
  })]
})
export class SpartacusConfigurationModule { }
