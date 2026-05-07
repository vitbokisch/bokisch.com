import type { AnyComponent } from "~/types"

export type Props = Partial<{
  name: string
  src: string
  alt: string
}>

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
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
