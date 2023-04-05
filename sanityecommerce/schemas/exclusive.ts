import {type} from 'os'
import {title} from 'process'

export default {
  name: 'exclusive',
  title: 'Exclusive',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
