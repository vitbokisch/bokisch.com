import { ComponentType } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import routes from '~/config/routes'

type Props = Partial<{
  href: string | (<T>(routes: T) => keyof T)
  external: boolean
  prefetch: boolean
  replace: boolean
  scroll: boolean
  shallow: boolean
}>

type WrapProps = Partial<{ active: boolean; href: string }>

type HOC = (WrappedComponent: ComponentType<WrapProps>) => ComponentType<Props>

const component: HOC = (WrappedComponent) => {
  const Enhanced = ({
    href,
    prefetch = false,
    replace,
    scroll,
    shallow,
    external,
    ...props
  }: Props) => {
    const { route } = useRouter()

    if (!href) return <WrappedComponent {...props} />

    const goTo = () => {
      if (typeof href === 'string') return href
      if (typeof href === 'function') return href<typeof routes>(routes)

      return ''
    }

    const destination = goTo()
    const externalProps =
      destination.startsWith('http') || external
        ? {
            rel: 'noopener noreferrer',
            target: '_blank',
          }
        : {}

    return (
      <Link
        href={destination}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
      >
        <WrappedComponent
          active={route === destination}
          href={destination}
          {...props}
          {...externalProps}
        />
      </Link>
    )
  }

  return Enhanced
}

export default component
