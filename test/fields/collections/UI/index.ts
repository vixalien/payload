import type { CollectionConfig } from 'payload/types'

import { UICustomClient } from './UICustomClient.js'
import { uiFieldsSlug } from './shared.js'

const UIFields: CollectionConfig = {
  slug: uiFieldsSlug,
  admin: {
    useAsTitle: 'text',
  },
  defaultSort: 'id',
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      type: 'ui',
      name: 'uiCustomClient',
      admin: {
        components: {
          Field: UICustomClient,
        },
      },
      customClient: {
        customValue: `client-side-configuration`,
      },
    },
  ],
}

export default UIFields
