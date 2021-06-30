// @ts-nocheck
import { useEffect, useState } from 'react'

type Props = { src?: string; alt?: string }

const getSource = (src, placeholder) => {
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
    original: optimizedImage.default,
  }
}

const component = (WrappedComponent) => {
  const Enhanced = ({ src, placeholder, ...props }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [sizes, setSizes] = useState({})
    const [source, setSource] = useState(getSource(src, placeholder))

    if (!src) return null

    useEffect(() => {
      setLoaded(false)
      setSource(getSource(src, placeholder))
    }, [src, placeholder])

    useEffect(() => {
      const originalImage = new Image()
      originalImage.src = source.original
      originalImage.onload = () => {
        setSizes({ width: originalImage.width, height: originalImage.height })
        setLoaded(true)
      }
    }, [source.original, source.placeholder])

    return (
      <WrappedComponent
        src={isLoaded ? source.original : source.placeholder}
        style={isLoaded ? {} : { filter: 'blur(10px)', opacity: 0.5 }}
        {...sizes}
        {...props}
      />
    )
  }

  return Enhanced
}

export default component
