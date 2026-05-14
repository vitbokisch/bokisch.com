import LinkList from '~/components/base/LinkList'
import data from './data'

type LinkListTypes = (typeof LinkList)['$$types']

// Explicit forwardable surface. We deliberately don't spread
// `ExtractProps<typeof LinkList>` because @pyreon/elements' iterator types
// (SimpleProps | ObjectProps | ChildrenProps) are mutually exclusive at the
// `itemProps`/`itemKey`/`children`/`valueName` discriminators — splatting a
// union-typed props bag into one of the branches trips a per-branch type
// mismatch. Listing the props we actually want to forward (rocketstyle
// dimensions + a couple of iterator extras) sidesteps the union narrowing.
type Props = Partial<{
  types: string[]
  contentDirection: LinkListTypes['contentDirection']
  contentAlignX: LinkListTypes['contentAlignX']
  indent: LinkListTypes['indent']
  gap: LinkListTypes['gap']
  // biome-ignore lint/suspicious/noExplicitAny: itemProps signature differs per iterator branch
  itemProps: any
  // biome-ignore lint/suspicious/noExplicitAny: wrapProps signature differs per iterator branch
  wrapProps: any
}>

const Component = (props: Props) => {
  const contacts = data
    .filter((item) => !props.types || props.types.includes(item.type))
    .map((item) => ({
      icon: item.type,
      href: item.link,
      label: item.username,
    }))

  return <LinkList {...props} data={contacts} gap="large" />
}

Component.displayName = 'sections/contacts/ContactList'
export default Component
