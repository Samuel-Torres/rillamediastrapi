import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.String;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.hero': HeroHero;
    }
  }
}
