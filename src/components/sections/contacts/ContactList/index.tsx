import type { FC } from 'react'
import type { ExtractProps } from '~/types'
import LinkList from '~/components/base/LinkList'
import data from './data'

type Props = ExtractProps<typeof LinkList> &
  Partial<{
    types: string[]
  }>

const Component: FC<Props> = ({ types, ...props }) => {
  const contacts = data
    .filter((item) => !types || types.includes(item.type))
    .map((item) => ({
      icon: item.type,
      href: item.link,
      label: item.username,
    }))

  return <LinkList data={contacts} gap="large" {...props} />
}

Component.displayName = 'sections/contacts/ContactList'
export default Component
