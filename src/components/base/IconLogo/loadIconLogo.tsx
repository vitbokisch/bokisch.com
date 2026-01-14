import type { ComponentType } from 'react'

export type Props = Partial<{
  name: string
  src: string
  alt: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced = ({ name, src, ...props }: Props) => (
    <WrappedComponent alt={name} {...props} src={src} />
  )

  Enhanced.displayName = `LoadIconLogo(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
