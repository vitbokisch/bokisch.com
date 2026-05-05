import { type ComponentType, type MouseEventHandler, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import routes from '~/config/routes'

type Props = Partial<{
  href: string | (<T>(routes: T) => keyof T)
  onClick?: MouseEventHandler
  external: boolean
  prefetch: boolean
  replace: boolean
  scroll: boolean
}>

type WrapProps = Partial<{
  active: boolean
  href: string
  onClick?: MouseEventHandler
  rel: string
  target: string
}>

type HOC = (WrappedComponent: ComponentType<WrapProps>) => ComponentType<Props>

const component: HOC = (WrappedComponent) => {
  const Enhanced = ({
    href,
    prefetch = false,
    replace,
    scroll,
    external,
    onClick,
    ...props
  }: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const getFinalHref = () => {
      if (typeof href === 'string') return href
      if (typeof href === 'function') return href<typeof routes>(routes)

      return ''
    }

    const finalHref = getFinalHref()

    useEffect(() => {
      if (prefetch) router.prefetch(finalHref)
    }, [finalHref, prefetch, router])

    if (!href) return <WrappedComponent onClick={onClick} {...props} />

    const isExternal = finalHref.startsWith('http') || external

    if (isExternal) {
      return (
        <WrappedComponent
          href={finalHref}
          onClick={onClick}
          {...props}
          rel="noopener noreferrer"
          target="_blank"
        />
      )
    }

    const isActive = pathname === finalHref

    return (
      <WrappedComponent
        active={isActive}
        href={finalHref}
        onClick={(e) => {
          e.preventDefault()
          if (onClick) onClick(e)
          if (replace) {
            router.replace(finalHref, { scroll })
          } else {
            router.push(finalHref, { scroll })
          }
        }}
        {...props}
      />
    )
  }

  return Enhanced
}

export default component
