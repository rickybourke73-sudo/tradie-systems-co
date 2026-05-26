import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'cta', title: 'CTAs' },
    { name: 'contact', title: 'Contact' },
    { name: 'seo', title: 'SEO defaults' }
  ],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline',
      type: 'string',
      group: 'hero',
      description: 'Main headline on the homepage.'
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero subheadline',
      type: 'text',
      rows: 3,
      group: 'hero'
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'Primary CTA label',
      type: 'string',
      group: 'cta',
      initialValue: 'Book a Free Strategy Call'
    }),
    defineField({
      name: 'ctaSecondaryLabel',
      title: 'Secondary CTA label',
      type: 'string',
      group: 'cta',
      initialValue: 'Get a Free Quote Follow-Up Audit'
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
      group: 'cta',
      description: 'Cal.com or Calendly link used in CTAs across the site.'
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact phone',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'serviceArea',
      title: 'Service area',
      type: 'string',
      group: 'contact',
      initialValue: 'Australia-wide'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'facebook', type: 'url', title: 'Facebook' }
      ]
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      group: 'seo'
    })
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' })
  }
});
