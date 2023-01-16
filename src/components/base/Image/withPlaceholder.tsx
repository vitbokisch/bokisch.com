import { useEffect, useState, ComponentType } from 'react'

type Props = {
  src: string
  placeholder?: boolean
  alt?: string
  style?: Record<string, unknown>
}

type GetSource = (
  src?: Props['src'],
  placeholder?: Props['placeholder']
) => { placeholder: string; original: string } | undefined

const getSource: GetSource = (src, placeholder) => {
  if (!src) return undefined

  if (src.startsWith('data:'))
    return {
      placeholder: null,
      original: src,
    }

  const optimizedImage = require(`~/assets/images/${src}?webp`)

  if (placeholder) {
    const importedPlaceholder = require(`~/assets/images/${src}?trace`)

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
    const [source, setSource] = useState<ReturnType<GetSource>>(getSource())

    useEffect(() => {
      const loadImage = () => {
        setLoaded(false)
        const loaded = getSource(src, placeholder)
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
