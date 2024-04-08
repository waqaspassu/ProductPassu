import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import { webpackBundler } from '@payloadcms/bundler-webpack'

import { slateEditor } from '@payloadcms/richtext-slate'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  admin: {
    bundler: webpackBundler(), // or viteBundler()
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  editor: slateEditor({}), // or slateEditor({})
  collections: [],
  
})