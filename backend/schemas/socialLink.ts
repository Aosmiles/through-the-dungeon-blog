import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'site',
      title: 'Site',
      type: 'string',
      validation: (rule) => rule.max(75).warning('75 characters max').required(),
    }),
    defineField({
      name: 'screenName',
      title: 'Screen Name',
      type: 'string',
      initialValue: '',
      validation: (rule) => rule.max(75).warning('75 characters max'),
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
