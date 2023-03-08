import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'through-the-dungeon-blog',
  title: 'Through The Dungeon',

  projectId: 'psk67h6g',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    cloudinaryAssetSourcePlugin(),
    cloudinarySchemaPlugin(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
