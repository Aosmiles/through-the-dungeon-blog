import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.max(120).required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.max(120).required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.max(160).warning(`160 characters max`).required(),
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About me',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'aboutMeImage',
      title: 'About Me Image',
      type: 'reference',
      to: [{type: 'illustration'}],
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
  ],
})
