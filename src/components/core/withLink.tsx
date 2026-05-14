import { useRouter } from '@pyreon/router'

type Props = Partial<{
  href: string
  onClick: (e: MouseEvent) => void
  external: boolean
  replace: boolean
  scroll: boolean
}>

// Hrefs the browser should handle natively — never route-push these.
const isBrowserHandled = (href: string, external?: boolean) =>
  external === true ||
  href.startsWith('http://') ||
  href.startsWith('https://') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:') ||
  href.startsWith('sms:')

// biome-ignore lint/suspicious/noExplicitAny: rocketstyle compose plumbing
type ComponentLike = (props: any) => any
// biome-ignore lint/suspicious/noExplicitAny: rocketstyle compose plumbing
type HOC = (WrappedComponent: ComponentLike) => (props: Props) => any

const component: HOC = (WrappedComponent) => {
  const Enhanced = (props: Props) => {
    const router = useRouter()

    return (
      <WrappedComponent
        {...props}
        rel={
          props.href && isBrowserHandled(props.href, props.external)
            ? 'noopener noreferrer'
            : undefined
        }
        target={
          props.href &&
          (props.external === true ||
            props.href.startsWith('http://') ||
            props.href.startsWith('https://'))
            ? '_blank'
            : undefined
        }
        onClick={(e: MouseEvent) => {
          if (props.onClick) props.onClick(e)
          const href = props.href
          if (!href || href === '#') return
          if (isBrowserHandled(href, props.external)) return
          e.preventDefault()
          if (props.replace) router.replace(href)
          else router.push(href)
        }}
      />
    )
  }

  return Enhanced
}

export default component
