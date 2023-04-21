import {theme} from 'https://themer.sanity.build/api/hues?default=465f2d;600&primary=047c9c&transparent=465835;600&positive=43d675;300&caution=fbd024;200&lightest=fcfdfc&darkest=11150d'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {schemaTypes} from './schemas'
import {myStructure} from './src/structure'

export default defineConfig({
  theme,
  name: 'default',
  title: 'through the dungeon',

  projectId: 'v15pu7z1',
  dataset: 'development',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify deploy',
          sites: [
            {
              title: 'Through The Dungeon',
              apiId: '4df9582c-374d-496f-8c52-45e2b5c4447a',
              buildHookId: '6442f28fb3ea58153fb39450',
              name: 'through-the-dungeon',
              url: 'https://through-the-dungeon.com',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
