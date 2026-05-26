'use client';

/**
 * Sanity Studio configuration.
 *
 * Mounted at /studio via app/studio/[[...index]]/page.tsx.
 * For a standalone studio, run `npx sanity dev` from the repo root.
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

export default defineConfig({
  name: 'tradie-systems-co',
  title: 'Tradie Systems Co — Studio',
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons first
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')
              ),
            S.divider(),

            // Document lists
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('author').title('Authors'),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('faq').title('FAQs')
          ])
    }),
    visionTool({ defaultApiVersion: apiVersion })
  ],

  schema: {
    types: schemaTypes,
    // Hide the singleton from "create new" menus
    templates: (templates) => templates.filter(({ schemaType }) => schemaType !== 'siteSettings')
  },

  document: {
    actions: (input, context) =>
      context.schemaType === 'siteSettings'
        ? input.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : input
  }
});
