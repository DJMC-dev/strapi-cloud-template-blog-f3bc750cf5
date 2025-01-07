import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsBenefit extends Struct.ComponentSchema {
  collectionName: 'components_atoms_benefits';
  info: {
    description: '';
    displayName: 'benefitCard';
  };
  attributes: {
    Description: Schema.Attribute.Component<'atoms.text', false>;
    icon: Schema.Attribute.Component<'atoms.image', false>;
    Title: Schema.Attribute.Component<'atoms.heading', false>;
  };
}

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    actionType: Schema.Attribute.Enumeration<['url', 'mailto', 'tel']>;
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    size: Schema.Attribute.Enumeration<['Normal', 'Medium', 'Small']>;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface AtomsCard extends Struct.ComponentSchema {
  collectionName: 'components_atoms_card';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    author: Schema.Attribute.Component<'atoms.text', false>;
    description: Schema.Attribute.Component<'atoms.text', false>;
    media: Schema.Attribute.Component<'atoms.image', false>;
    publishDate: Schema.Attribute.Date;
    readingTime: Schema.Attribute.Component<'atoms.text', false>;
    title: Schema.Attribute.Component<'atoms.text', false>;
    url: Schema.Attribute.Component<'atoms.button', false>;
  };
}

export interface AtomsHeading extends Struct.ComponentSchema {
  collectionName: 'components_atoms_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'rigth']>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['Title', 'Sub-title']>;
  };
}

export interface AtomsImage extends Struct.ComponentSchema {
  collectionName: 'components_atoms_images';
  info: {
    description: '';
    displayName: 'Media';
  };
  attributes: {
    fullWidth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    value: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface AtomsText extends Struct.ComponentSchema {
  collectionName: 'components_atoms_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    value: Schema.Attribute.RichText;
    variant: Schema.Attribute.Enumeration<['Body 1', 'Body 2', 'Disclaimer']>;
  };
}

export interface MoleculesBenefits extends Struct.ComponentSchema {
  collectionName: 'components_molecules_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    benefitCard: Schema.Attribute.Component<'atoms.benefit', true>;
    subTitle: Schema.Attribute.Component<'atoms.text', false>;
    title: Schema.Attribute.Component<'atoms.heading', false>;
  };
}

export interface MoleculesDisclaimer extends Struct.ComponentSchema {
  collectionName: 'components_molecules_disclaimers';
  info: {
    description: '';
    displayName: 'Disclaimer';
  };
  attributes: {
    description: Schema.Attribute.Component<'atoms.text', false> &
      Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface MoleculesDoubts extends Struct.ComponentSchema {
  collectionName: 'components_molecules_doubts';
  info: {
    description: '';
    displayName: 'Doubts';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'atoms.button', true>;
    description: Schema.Attribute.Component<'atoms.text', false>;
    icon: Schema.Attribute.Component<'atoms.image', false>;
    title: Schema.Attribute.Component<'atoms.text', false>;
  };
}

export interface MoleculesHero extends Struct.ComponentSchema {
  collectionName: 'components_molecules_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'atoms.button', false>;
    description: Schema.Attribute.Component<'atoms.text', false>;
    image: Schema.Attribute.Component<'atoms.image', false>;
    title: Schema.Attribute.Component<'atoms.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface MoleculesInfo extends Struct.ComponentSchema {
  collectionName: 'components_molecules_infos';
  info: {
    description: '';
    displayName: 'Info';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'right', 'top', 'bottom']>;
    background: Schema.Attribute.Enumeration<['Blanco', 'Blue-gray']>;
    button: Schema.Attribute.Component<'atoms.button', false>;
    description: Schema.Attribute.Component<'atoms.text', false>;
    media: Schema.Attribute.Component<'atoms.image', false>;
    title: Schema.Attribute.Component<'atoms.heading', false>;
  };
}

export interface MoleculesLinkycard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_linkycards';
  info: {
    description: '';
    displayName: 'linkycard';
  };
  attributes: {
    cards: Schema.Attribute.Component<'atoms.card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    heading: Schema.Attribute.Component<'atoms.heading', false>;
  };
}

export interface MoleculesTable extends Struct.ComponentSchema {
  collectionName: 'components_molecules_tables';
  info: {
    description: '';
    displayName: 'Table';
  };
  attributes: {
    showSubtitle: Schema.Attribute.Boolean & Schema.Attribute.Required;
    showTableHeaderTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subTitle: Schema.Attribute.Component<'atoms.text', false>;
    tableHeaderTitle: Schema.Attribute.Component<'atoms.text', false>;
    title: Schema.Attribute.Component<'atoms.heading', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.benefit': AtomsBenefit;
      'atoms.button': AtomsButton;
      'atoms.card': AtomsCard;
      'atoms.heading': AtomsHeading;
      'atoms.image': AtomsImage;
      'atoms.text': AtomsText;
      'molecules.benefits': MoleculesBenefits;
      'molecules.disclaimer': MoleculesDisclaimer;
      'molecules.doubts': MoleculesDoubts;
      'molecules.hero': MoleculesHero;
      'molecules.info': MoleculesInfo;
      'molecules.linkycard': MoleculesLinkycard;
      'molecules.table': MoleculesTable;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
