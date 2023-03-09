import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'feature'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'catagories',
      title: 'Catagories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'catagory'}],
        },
      ],
    }),
    defineField({
      name: 'publishDate',
      title: 'Date Published',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
})
