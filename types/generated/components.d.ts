import type { Schema, Struct } from '@strapi/strapi';

export interface UiCardSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_ui_card_slideshows';
  info: {
    displayName: 'card_slideshow';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface UiHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'bell';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.RichText;
    content_positioin: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface UiMenu extends Struct.ComponentSchema {
  collectionName: 'components_ui_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface UiRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_rows';
  info: {
    description: '';
    displayName: 'row';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    content_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface UiVertialTagSlideItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_vertial_tag_slide_items';
  info: {
    description: '';
    displayName: 'Vertial Tag Slide Item';
    icon: 'arrowRight';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface UiVerticalTagSlide extends Struct.ComponentSchema {
  collectionName: 'components_ui_vertical_tag_slides';
  info: {
    description: '';
    displayName: 'verticalTagSlide';
    icon: 'arrowDown';
  };
  attributes: {
    header: Schema.Attribute.String;
    items: Schema.Attribute.Component<'ui.vertial-tag-slide-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.card-slideshow': UiCardSlideshow;
      'ui.hero': UiHero;
      'ui.menu': UiMenu;
      'ui.row': UiRow;
      'ui.vertial-tag-slide-item': UiVertialTagSlideItem;
      'ui.vertical-tag-slide': UiVerticalTagSlide;
    }
  }
}
