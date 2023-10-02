import { FC } from 'react'
import { ExtractProps } from '~/types'
import { useStore, observer } from '~/store'
import LinkList from '~/components/base/LinkList'

type Props = ExtractProps<typeof LinkList> &
  Partial<{
    types: string[]
  }>

const Component: FC<Props> = ({ types, ...props }) => {
  const store = useStore('')

  const contacts = store.contacts?.pickDataByType(types).map((item) => ({
    icon: item.type,
    href: item.link,
    label: item.username,
  }))

  return <LinkList data={contacts} gap="large" {...props} />
}

export default observer(Component)
