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
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
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
      name: 'pinnedPost',
      title: 'Pinned Post',
      type: 'reference',
      to: [{type: 'post'}],
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
  ],
})
