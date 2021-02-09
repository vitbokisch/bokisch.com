import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import IconList from '~/components/base/IconList'

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  const socials = store.socials
    ?.pickDataByType([
      'github',
      'linkedin',
      'medium',
      'twitter',
      'stackoverflow',
    ])
    .map((item) => ({ name: item.type, link: item.link }))

  return (
    <IconList
      data={socials}
      gap="large"
      itemProps={{ size: 'medium', base: true, external: true }}
    />
  )
}

export default observer(component)
