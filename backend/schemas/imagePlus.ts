import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imagePlus',
  title: 'Image + Caption and Alt Text',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(140).warning(`Alt text shouldn't be more than 140 characters.`),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(140).warning(`A caption shouldn't be more than 140 characters.`),
    }),
  ],
})
