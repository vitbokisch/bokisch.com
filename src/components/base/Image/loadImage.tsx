import { useEffect, useState, type ComponentType } from 'react'

export type Props = Partial<{
  src: string
}>

type ImageSize = { width: number; height: number }

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced = ({ src, ...props }: Props) => {
    const [sizes, setSizes] = useState<ImageSize>({ width: 0, height: 0 })

    useEffect(() => {
      if (src) {
        const originalImage = new Image()
        originalImage.src = src
        originalImage.onload = () => {
          setSizes({ width: originalImage.width, height: originalImage.height })
        }
        // Cleanup
        return () => {
          originalImage.onload = null
        }
      }
    }, [src])

    if (!src) return null

    return <WrappedComponent src={src} {...sizes} {...props} />
  }

  Enhanced.displayName = `LoadImage(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
