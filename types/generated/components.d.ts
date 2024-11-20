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

export interface ServiceListServiceList extends Schema.Component {
  collectionName: 'components_service_list_service_lists';
  info: {
    displayName: 'serviceList';
    icon: 'apps';
    description: '';
  };
  attributes: {
    serviceCard: Attribute.Component<'service-card.service-card', true>;
  };
}

export interface ServiceCardServiceCard extends Schema.Component {
  collectionName: 'components_service_card_service_cards';
  info: {
    displayName: 'serviceCard';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    iconImage: Attribute.Media<'images'>;
    title: Attribute.Text;
    subheading: Attribute.Text;
    bulletOne: Attribute.Text;
    bulletTwo: Attribute.Text;
    bulletThree: Attribute.Text;
    alt: Attribute.Text;
    sellingPoint: Attribute.Text;
  };
}

export interface PastClientListPastClientList extends Schema.Component {
  collectionName: 'components_past_client_list_past_client_lists';
  info: {
    displayName: 'pastClientList';
    icon: 'filter';
  };
  attributes: {
    companyCard: Attribute.Component<
      'client-card-component.client-card-component',
      true
    >;
  };
}

export interface InfoCardsListInfoCardsList extends Schema.Component {
  collectionName: 'components_info_cards_list_info_cards_lists';
  info: {
    displayName: 'infoCardsList';
    icon: 'bulletList';
  };
  attributes: {
    infoCard: Attribute.Component<'info-card.info-card', true>;
  };
}

export interface InfoCardInfoCard extends Schema.Component {
  collectionName: 'components_info_card_info_cards';
  info: {
    displayName: 'infoCard';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    iconImage: Attribute.Media<'images'>;
    bullets: Attribute.Component<'bullet-point.bullet-point', true>;
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
    socials: Attribute.Component<'social-media-links.social-media-links', true>;
    clientList: Attribute.Component<
      'client-card-component.client-card-component',
      true
    >;
  };
}

export interface HeadlingAsideHeadlingAside extends Schema.Component {
  collectionName: 'components_headling_aside_headling_asides';
  info: {
    displayName: 'headlingAside';
    icon: 'archive';
  };
  attributes: {
    dblHighlightHeading: Attribute.Component<'double-highlight-heading.double-highlight-heading'>;
    AsideHeading: Attribute.String;
    TextBody: Attribute.Text;
    ctaBtn: Attribute.Component<'cta-btn.cta-btn'>;
  };
}

export interface HeadingBulletsHeadingBullets extends Schema.Component {
  collectionName: 'components_heading_bullets_heading_bullets';
  info: {
    displayName: 'heading-bullets';
    icon: 'filter';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    bullet: Attribute.Component<'bullet-point.bullet-point', true>;
  };
}

export interface DoubleHighlightHeadingDoubleHighlightHeading
  extends Schema.Component {
  collectionName: 'components_double_highlight_heading_double_highlight_headings';
  info: {
    displayName: 'doubleHighlightHeading';
    icon: 'arrowRight';
  };
  attributes: {
    highlightOne: Attribute.String;
    textOne: Attribute.String;
    highlightTwo: Attribute.String;
    textTwo: Attribute.String;
  };
}

export interface CtaBtnCtaBtn extends Schema.Component {
  collectionName: 'components_cta_btn_cta_btns';
  info: {
    displayName: 'ctaBtn';
    icon: 'medium';
  };
  attributes: {
    ctaText: Attribute.String;
    routeDestination: Attribute.String;
    borderColor: Attribute.String;
    initialFontColor: Attribute.String;
  };
}

export interface ContactFormContactForm extends Schema.Component {
  collectionName: 'components_contact_form_contact_forms';
  info: {
    displayName: 'contactForm';
    icon: 'pencil';
  };
  attributes: {
    Heading: Attribute.String;
  };
}

export interface ClientCardComponentClientCardComponent
  extends Schema.Component {
  collectionName: 'components_client_card_component_client_card_components';
  info: {
    displayName: 'clientCardComponent';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    companyName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    alt: Attribute.String;
    logo: Attribute.Media<'images', true>;
    websiteUrl: Attribute.String;
    className: Attribute.String;
  };
}

export interface BulletPointBulletPoint extends Schema.Component {
  collectionName: 'components_bullet_point_bullet_points';
  info: {
    displayName: 'bullet-point';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    bullet: Attribute.Text;
    iconIsVisible: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'socials.socials': SocialsSocials;
      'social-media-links.social-media-links': SocialMediaLinksSocialMediaLinks;
      'service-list.service-list': ServiceListServiceList;
      'service-card.service-card': ServiceCardServiceCard;
      'past-client-list.past-client-list': PastClientListPastClientList;
      'info-cards-list.info-cards-list': InfoCardsListInfoCardsList;
      'info-card.info-card': InfoCardInfoCard;
      'icon-aside.icon-aside': IconAsideIconAside;
      'highlight-heading.highlight-heading': HighlightHeadingHighlightHeading;
      'hero.hero': HeroHero;
      'headling-aside.headling-aside': HeadlingAsideHeadlingAside;
      'heading-bullets.heading-bullets': HeadingBulletsHeadingBullets;
      'double-highlight-heading.double-highlight-heading': DoubleHighlightHeadingDoubleHighlightHeading;
      'cta-btn.cta-btn': CtaBtnCtaBtn;
      'contact-form.contact-form': ContactFormContactForm;
      'client-card-component.client-card-component': ClientCardComponentClientCardComponent;
      'bullet-point.bullet-point': BulletPointBulletPoint;
    }
  }
}
