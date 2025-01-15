import type { Schema, Struct } from '@strapi/strapi';

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
      'ui.vertial-tag-slide-item': UiVertialTagSlideItem;
      'ui.vertical-tag-slide': UiVerticalTagSlide;
    }
  }
}
