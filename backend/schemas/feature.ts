import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(75).warning('75 characters max').required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.max(140).warning('140 characters max').required(),
    }),
  ],
})
