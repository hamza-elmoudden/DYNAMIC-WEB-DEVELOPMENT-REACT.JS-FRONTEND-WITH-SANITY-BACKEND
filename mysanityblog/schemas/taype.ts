import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'taype',
  title: 'Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})