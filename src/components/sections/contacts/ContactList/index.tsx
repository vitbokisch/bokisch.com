import type { FC } from 'react'
import LinkList from '~/components/base/LinkList'
import data from './data'

type LinkListTypes = (typeof LinkList)['$$types']

type Props = Partial<{
  types: string[]
  contentDirection: LinkListTypes['contentDirection']
  contentAlignX: LinkListTypes['contentAlignX']
  indent: LinkListTypes['indent']
  gap: LinkListTypes['gap']
  // biome-ignore lint/suspicious/noExplicitAny: iterator union types in
  // @vitus-labs/elements use mutually-exclusive discriminators (valueName/
  // itemKey/itemProps differ per branch), which breaks prop forwarding from
  // a parent. Cast to `any` until the elements iterator types are flattened.
  itemProps: any
  // biome-ignore lint/suspicious/noExplicitAny: same as itemProps above.
  wrapProps: any
}>

const Component: FC<Props> = ({ types, ...props }) => {
  const contacts = data
    .filter((item) => !types || types.includes(item.type))
    .map((item) => ({
      icon: item.type,
      href: item.link,
      label: item.username,
    }))

  return <LinkList {...props} data={contacts} gap="large" />
}

Component.displayName = 'sections/contacts/ContactList'
export default Component
