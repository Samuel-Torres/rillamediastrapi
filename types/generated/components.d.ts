import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'apps';
  };
  attributes: {
    socialMediaList: Attribute.Component<
      'social-media-list.social-media-list',
      true
    >;
  };
}

export interface SocialMediaListSocialMediaList extends Schema.Component {
  collectionName: 'components_social_media_list_social_media_lists';
  info: {
    displayName: 'socialMediaList';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    href: Attribute.String;
    altText: Attribute.String;
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
    socialMediaList: Attribute.Component<
      'social-media-list.social-media-list',
      true
    >;
    numberAside: Attribute.Component<'icon-aside.icon-aside'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'socials.socials': SocialsSocials;
      'social-media-list.social-media-list': SocialMediaListSocialMediaList;
      'icon-aside.icon-aside': IconAsideIconAside;
      'highlight-heading.highlight-heading': HighlightHeadingHighlightHeading;
      'hero.hero': HeroHero;
    }
  }
}
