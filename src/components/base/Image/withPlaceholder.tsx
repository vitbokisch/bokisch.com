import { useEffect, useState, type ComponentType } from 'react'

type Props = {
  src: string
  placeholder?: boolean
  alt?: string
  style?: Record<string, unknown>
}

type GetResourceReturnType =
  | { placeholder: string | null; original: string }
  | undefined
type GetSource = (
  src?: Props['src'],
  placeholder?: Props['placeholder']
) => Promise<GetResourceReturnType>

const getSource: GetSource = async (src, placeholder) => {
  if (!src) return undefined

  if (src.startsWith('data:'))
    return {
      placeholder: null,
      original: src,
    }

  const optimizedImage = await import(`~/assets/images/${src}?webp`)

  if (placeholder) {
    const importedPlaceholder = await import(`~/assets/images/${src}?trace`)

    return {
      placeholder: importedPlaceholder.trace as string,
      original: optimizedImage.default as string,
    }
  }

  return {
    placeholder: null,
    original: optimizedImage.default as string,
  }
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

type ImageSize = { width: number; height: number }

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced: ComponentType<Props> = ({ src, placeholder, ...props }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [sizes, setSizes] = useState<ImageSize>({ width: 0, height: 0 })
    const [source, setSource] = useState<GetResourceReturnType>()

    useEffect(() => {
      const loadImage = async () => {
        setLoaded(false)
        const loaded = await getSource(src, placeholder)
        setSource(loaded)
      }

      loadImage()
    }, [src, placeholder])

    useEffect(() => {
      if (source?.original) {
        const originalImage = new Image()
        originalImage.src = source.original
        originalImage.onload = () => {
          setSizes({ width: originalImage.width, height: originalImage.height })
          setLoaded(true)
        }
        // Cleanup
        return () => {
          originalImage.onload = null
        }
      }
    }, [source])

    if (!src) return null
    if (!source?.original && !source?.placeholder) return null

    const imageSrc = isLoaded ? source.original : (source.placeholder || source.original)

    return (
      <WrappedComponent
        src={imageSrc}
        style={isLoaded ? {} : { filter: 'blur(10px)', opacity: 0.5 }}
        {...sizes}
        {...props}
      />
    )
  }

  Enhanced.displayName = `WithPlaceholder(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
