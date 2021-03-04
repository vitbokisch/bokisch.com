import { VFC } from 'react'
import { useStore, observer } from '~/store'
import IconList from '~/components/base/IconList'

const component: VFC = () => {
  const store = useStore('')

  const socials = store.socials
    ?.pickDataByType([
      'github',
      'linkedin',
      'medium',
      'twitter',
      'stackoverflow',
    ])
    .map((item) => ({ name: item.type, href: item.link }))

  return (
    <IconList
      data={socials}
      gap="large"
      itemProps={{ size: 'medium', external: true }}
    />
  )
}

export default observer(component)
