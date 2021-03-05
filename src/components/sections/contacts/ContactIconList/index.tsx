import { VFC } from 'react'
import { useStore, observer } from '~/store'
import IconList from '~/components/base/IconList'

const component: VFC = () => {
  const store = useStore('')

  const contacts = store.contacts
    ?.pickDataByType([
      'github',
      'linkedin',
      'medium',
      'twitter',
      'stackoverflow',
    ])
    .map((item) => ({ name: item.type, href: item.link, label: item.label }))

  return (
    <IconList
      data={contacts}
      gap="large"
      itemProps={{ size: 'medium', external: true }}
    />
  )
}

export default observer(component)
