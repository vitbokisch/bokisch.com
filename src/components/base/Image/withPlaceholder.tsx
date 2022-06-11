/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { useEffect, useState, ComponentType } from 'react'

type Props = {
  src: string
  placeholder?: string
  alt?: string
  style?: Record<string, unknown>
}

type GetSource = (
  src: string,
  placeholder?: string
) => { placeholder: any; original: string } | undefined

const getSource: GetSource = (src, placeholder) => {
  if (!src) return undefined

  if (src.startsWith('data:'))
    return {
      placeholder: null,
      original: src,
    }

  const optimizedImage = require(`~/assets/images/${src}?webp`)

  if (placeholder) {
    return {
      placeholder: require(`~/assets/images/${src}?trace`).trace,
      original: optimizedImage,
    }
  }

  return {
    placeholder: null,
    original: optimizedImage,
  }
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced: ComponentType<Props> = ({ src, placeholder, ...props }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [sizes, setSizes] = useState({})
    const [source, setSource] = useState(getSource(src, placeholder))

    useEffect(() => {
      setLoaded(false)
      setSource(getSource(src, placeholder))
    }, [src, placeholder])

    useEffect(() => {
      const originalImage = new Image()
      if (source) {
        originalImage.src = source.original
        originalImage.onload = () => {
          setSizes({ width: originalImage.width, height: originalImage.height })
          setLoaded(true)
        }
      }
    }, [source])

    if (!src) return null

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
