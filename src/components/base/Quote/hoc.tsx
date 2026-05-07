import type { AnyComponent } from "~/types"

type Props = {
  author?: string
  quote?: string
  [key: string]: unknown
}

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
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
