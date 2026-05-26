import type { SchemaTypeDefinition } from 'sanity';

import { post } from './post';
import { category } from './category';
import { author } from './author';
import { faq } from './faq';
import { service } from './service';
import { siteSettings } from './siteSettings';
import { seo } from './seo';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  post,
  category,
  author,
  faq,
  service,
  siteSettings,
  // Objects
  seo
];
