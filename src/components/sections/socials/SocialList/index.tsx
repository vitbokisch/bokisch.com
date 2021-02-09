import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import LinkList from '~/components/base/LinkList'

type Props = typeof LinkList['propTypes'] &
  Partial<{
    store: IStore
    types: Array<string>
  }>

const component: FC<Props> = ({ types, ...props }) => {
  const store = useStore('')

  const socials = store.socials?.pickDataByType(types).map((item) => ({
    icon: item.type,
    href: item.link,
    label: item.username,
  }))

  return <LinkList data={socials} gap="large" {...props} />
}

export default observer(component)
