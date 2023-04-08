import {CogIcon} from '@sanity/icons'

export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings').icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['siteSettings'].includes(listItem.getId())
      ),
    ])
