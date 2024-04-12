import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import { webpackBundler } from '@payloadcms/bundler-webpack'

import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { Users } from './app/collections/user'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL_PAYLOAD || '',
  collections:[Users],
  admin: {
    user:"users",
    bundler: webpackBundler(), // or viteBundler()
    meta: {
      titleSuffix: "--digitalHippo",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
    
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  editor: slateEditor({}), // or slateEditor({})
  rateLimit:{
    max: 2000
  },
  typescript: {
    outputFile: path.join(__dirname, "payload-types.ts"),
  },
  
})