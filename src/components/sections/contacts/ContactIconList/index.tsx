import type { FC } from 'react'
import IconList from '~/components/base/IconList'
import data from './data'

const Component: FC = () => {
  const contacts = data
    // .filter((item) => !types || types.includes(item.type))
    .map((item) => ({
      name: item.type,
      href: item.link,
      label: item.username,
    }))

  return (
    <IconList
      data={contacts}
      gap="large"
      itemProps={{ size: 'medium', external: true }}
    />
  )
}

Component.displayName = 'sections/contacts/ContactIconList'
export default Component
