import { useEffect, ComponentType, MouseEventHandler } from 'react'
import { useRouter } from 'next/router'
import routes from '~/config/routes'

type Props = Partial<{
  href: string | (<T>(routes: T) => keyof T)
  onClick?: MouseEventHandler
  external: boolean
  prefetch: boolean
  replace: boolean
  scroll: boolean
  shallow: boolean
}>

type WrapProps = Partial<{
  active: boolean
  href: string
  onClick?: MouseEventHandler
}>

type HOC = (WrappedComponent: ComponentType<WrapProps>) => ComponentType<Props>

const component: HOC = (WrappedComponent) => {
  const Enhanced = ({
    href,
    prefetch = false,
    replace,
    scroll,
    shallow,
    external,
    onClick,
    ...props
  }: Props) => {
    const router = useRouter()

    const getFinalHref = () => {
      if (typeof href === 'string') return href
      if (typeof href === 'function') return href<typeof routes>(routes)

      return ''
    }

    useEffect(() => {
      if (prefetch) router.prefetch(getFinalHref())
    })

    if (!href) return <WrappedComponent onClick={onClick} {...props} />

    const externalProps =
      getFinalHref().startsWith('http') || external
        ? {
            rel: 'noopener noreferrer',
            target: '_blank',
          }
        : {}

    const finalHref = getFinalHref()
    const handleClick = replace ? router.replace : router.push
    const isActive = router.route === finalHref

    return (
      <WrappedComponent
        active={isActive}
        href={finalHref}
        onClick={(e) => {
          e.preventDefault()
          if (onClick) onClick(e)
          handleClick(finalHref, finalHref, { shallow, scroll })
        }}
        {...props}
        {...externalProps}
      />
    )
  }

  return Enhanced
}

export default component
