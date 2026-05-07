import { useRouter } from '@pyreon/router'
import routes from '~/config/routes'

type Props = Partial<{
  href: string | (<T>(routes: T) => keyof T)
  onClick: (e: MouseEvent) => void
  external: boolean
  replace: boolean
  scroll: boolean
}>

// biome-ignore lint/suspicious/noExplicitAny: rocketstyle compose plumbing
type ComponentLike = (props: any) => any
// biome-ignore lint/suspicious/noExplicitAny: rocketstyle compose plumbing
type HOC = (WrappedComponent: ComponentLike) => (props: Props) => any

const component: HOC = (WrappedComponent) => {
  const Enhanced = (props: Props) => {
    const router = useRouter()

    const getFinalHref = () => {
      if (typeof props.href === 'string') return props.href
      if (typeof props.href === 'function')
        return props.href<typeof routes>(routes)
      return ''
    }

    const finalHref = getFinalHref()

    if (!props.href)
      return <WrappedComponent onClick={props.onClick} {...props} />

    const isExternal = finalHref.startsWith('http') || props.external

    if (isExternal) {
      return (
        <WrappedComponent
          {...props}
          href={finalHref}
          rel="noopener noreferrer"
          target="_blank"
        />
      )
    }

    return (
      <WrappedComponent
        {...props}
        href={finalHref}
        onClick={(e: MouseEvent) => {
          e.preventDefault()
          if (props.onClick) props.onClick(e)
          if (props.replace) router.replace(finalHref)
          else router.push(finalHref)
        }}
      />
    )
  }

  return Enhanced
}

export default component
