import type { ComponentType } from 'react'
import link from '../Link'

const Link = link.attrs({
  contentAlignX: 'block',
})

export type Props = Partial<{
  link: string
  name: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced = ({
    link,
    name,
    image,
    ...props
  }: Props & { image?: string }) => {
    const Result = <WrappedComponent {...props} name="" />

    if (link) return <Link href={link}>{Result}</Link>

    return Result
  }

  Enhanced.displayName = `WithLink(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
