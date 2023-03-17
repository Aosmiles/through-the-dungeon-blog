import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'illustration',
  title: 'Illustration',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(50).warning('50 characters max'),
      initialValue: '',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.max(140).warning('140 characters max'),
      initialValue: '',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.max(140).warning('140 characters max'),
      initialValue: '',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
