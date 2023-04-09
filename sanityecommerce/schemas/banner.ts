export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'text',
      },
    },

    {
      title: 'Desc',
      name: 'desc',
      type: 'string',
    },

    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
