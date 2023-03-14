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
      validation: (Rule) => Rule.max(50).warning(`50 characters max`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'illustration',
      title: 'Illustration',
      type: 'reference',
      to: [{type: 'illustration'}],
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Purple', value: 'purple'},
          {title: 'Teal', value: 'teal'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Black', value: 'black'},
        ],
      },
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'feature'}],
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.max(255).warning(`255 characters max`),
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
