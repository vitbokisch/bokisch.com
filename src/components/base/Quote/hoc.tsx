import type { ComponentType } from 'react'

type Props = {
  author?: string
  quote?: string
  [key: string]: unknown
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced = ({ author, quote, ...props }: Props) => (
    <WrappedComponent {...props} />
  )

  Enhanced.displayName = `Quote(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
