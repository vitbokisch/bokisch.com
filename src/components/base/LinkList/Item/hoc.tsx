import type { ComponentType } from 'react'

type Props = {
  icon?: string
  [key: string]: unknown
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced = ({ icon, ...props }: Props) => <WrappedComponent {...props} />

  Enhanced.displayName = `LinkListItem(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
