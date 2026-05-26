import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      description: 'Shown in browser tabs and search results. ~50–60 characters.',
      validation: (Rule) => Rule.max(70).warning('Keep meta title under 70 characters.')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Shown under the title in search results. ~150–160 characters.',
      validation: (Rule) =>
        Rule.max(180).warning('Keep meta description under 180 characters.')
    }),
    defineField({
      name: 'ogImage',
      title: 'Social share image',
      type: 'image',
      description: '1200×630px recommended. Used for Facebook, LinkedIn, X/Twitter previews.',
      options: { hotspot: true }
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false
    })
  ]
});
