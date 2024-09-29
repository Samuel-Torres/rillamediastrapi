import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'apps';
    description: '';
  };
  attributes: {
    socialMediaLinks: Attribute.Component<
      'social-media-links.social-media-links',
      true
    >;
  };
}

export interface SocialMediaLinksSocialMediaLinks extends Schema.Component {
  collectionName: 'components_social_media_links_social_media_links';
  info: {
    displayName: 'socialMediaLinks';
    icon: 'attachment';
  };
  attributes: {
    href: Attribute.String;
    alt: Attribute.String;
    imageSrc: Attribute.Media<'images'>;
  };
}

export interface IconAsideIconAside extends Schema.Component {
  collectionName: 'components_icon_aside_icon_asides';
  info: {
    displayName: 'IconAside';
    icon: 'hashtag';
  };
  attributes: {
    text: Attribute.String;
    isRow: Attribute.Boolean & Attribute.DefaultTo<true>;
    iconImage: Attribute.Media<'images'>;
  };
}

export interface HighlightHeadingHighlightHeading extends Schema.Component {
  collectionName: 'components_highlight_heading_highlight_headings';
  info: {
    displayName: 'highlightHeading';
    icon: 'archive';
  };
  attributes: {
    firstText: Attribute.String;
    highlightedText: Attribute.String;
    remainingText: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    icon: 'alien';
    description: '';
  };
  attributes: {
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    highlightedText: Attribute.Component<'highlight-heading.highlight-heading'>;
    numberAside: Attribute.Component<'icon-aside.icon-aside'>;
    sellingPoint: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'socials.socials': SocialsSocials;
      'social-media-links.social-media-links': SocialMediaLinksSocialMediaLinks;
      'icon-aside.icon-aside': IconAsideIconAside;
      'highlight-heading.highlight-heading': HighlightHeadingHighlightHeading;
      'hero.hero': HeroHero;
    }
  }
}
