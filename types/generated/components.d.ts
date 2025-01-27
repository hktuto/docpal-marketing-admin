import type { Schema, Struct } from '@strapi/strapi';

export interface AppMenu extends Struct.ComponentSchema {
  collectionName: 'components_app_menus';
  info: {
    description: '';
    displayName: 'menu';
  };
  attributes: {
    dropdown: Schema.Attribute.Component<'ui.text', false>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface AppSlide extends Struct.ComponentSchema {
  collectionName: 'components_app_slides';
  info: {
    description: '';
    displayName: 'slide';
  };
  attributes: {
    class: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    overlay: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tagline: Schema.Attribute.String;
  };
}

export interface UiBigSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_ui_big_slideshows';
  info: {
    description: '';
    displayName: 'big slideshow';
  };
  attributes: {
    slide: Schema.Attribute.Component<'app.slide', true>;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    class: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface UiCardSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_ui_card_slideshows';
  info: {
    description: '';
    displayName: 'card_slideshow';
  };
  attributes: {
    card: Schema.Attribute.Component<'ui.card', true>;
    class: Schema.Attribute.String;
  };
}

export interface UiColumn extends Struct.ComponentSchema {
  collectionName: 'components_ui_columns';
  info: {
    description: '';
    displayName: 'column';
  };
  attributes: {
    class: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    direction: Schema.Attribute.Enumeration<['left', 'right', 'center']>;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    span: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface UiContentSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_ui_content_slideshows';
  info: {
    description: '';
    displayName: 'content slideshow';
  };
  attributes: {
    class: Schema.Attribute.String;
    slide: Schema.Attribute.Component<'ui.column', true>;
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
    background: Schema.Attribute.Media<'images' | 'videos'>;
    class: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    content_positioin: Schema.Attribute.Enumeration<
      ['left', 'center', 'right']
    > &
      Schema.Attribute.DefaultTo<'left'>;
    fullwidth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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
    class: Schema.Attribute.String;
    column: Schema.Attribute.Component<'ui.column', true>;
    title: Schema.Attribute.String;
  };
}

export interface UiText extends Struct.ComponentSchema {
  collectionName: 'components_ui_texts';
  info: {
    description: '';
    displayName: 'text';
  };
  attributes: {
    class: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
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
    image: Schema.Attribute.Media<'images' | 'videos'>;
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
      'app.menu': AppMenu;
      'app.slide': AppSlide;
      'ui.big-slideshow': UiBigSlideshow;
      'ui.card': UiCard;
      'ui.card-slideshow': UiCardSlideshow;
      'ui.column': UiColumn;
      'ui.content-slideshow': UiContentSlideshow;
      'ui.hero': UiHero;
      'ui.row': UiRow;
      'ui.text': UiText;
      'ui.vertial-tag-slide-item': UiVertialTagSlideItem;
      'ui.vertical-tag-slide': UiVerticalTagSlide;
    }
  }
}
