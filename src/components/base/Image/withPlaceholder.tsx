import { useEffect, useState, type ComponentType } from 'react'

type Props = {
  src: string
  placeholder?: boolean
  alt?: string
  style?: Record<string, unknown>
}

type GetResourceReturnType =
  | { placeholder: string; original: string }
  | undefined;
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
      placeholder: importedPlaceholder.trace,
      original: optimizedImage.default,
    }
  }

  return {
    placeholder: null,
    original: optimizedImage.default,
  }
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

type ImageSize = { width: number; height: number }

const Component: HOC = (WrappedComponent) => {
  const Enhanced: ComponentType<Props> = ({ src, placeholder, ...props }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [sizes, setSizes] = useState<{ width: number; height: number }>(
      {} as ImageSize
    )
    const [source, setSource] = useState<GetResourceReturnType>();

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
        originalImage.src = source?.original
        originalImage.onload = () => {
          setSizes({ width: originalImage.width, height: originalImage.height })
          setLoaded(true)
        }
      }
    }, [source])

    if (!src) return null
    if (!source?.original && !source?.placeholder) return null

    return (
      <WrappedComponent
        src={isLoaded ? source?.original : source?.placeholder}
        style={isLoaded ? {} : { filter: 'blur(10px)', opacity: 0.5 }}
        {...sizes}
        {...props}
      />
    )
  }

  return Enhanced
}

export default Component
