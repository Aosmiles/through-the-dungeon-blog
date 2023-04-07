import {theme} from 'https://themer.sanity.build/api/hues?default=465f2d;600&primary=047c9c&transparent=465835;600&positive=43d675;300&caution=fbd024;200&lightest=fcfdfc&darkest=11150d'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure} from './src/structure'

export default defineConfig({
  theme,
  name: 'default',
  title: 'through the dungeon',

  projectId: 'v15pu7z1',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
