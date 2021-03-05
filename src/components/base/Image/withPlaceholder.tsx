// @ts-nocheck
import { useEffect, useState } from 'react'

type Props = { src?: string; alt?: string }

const getSource = (src, placeholder) => {
  if (!src) return undefined

  if (placeholder) return require(`~/assets/images/${src}&trace`)

  return require(`~/assets/images/${src}?webp`)
}

const component = (WrappedComponent) => {
  const Enhanced = ({ src, placeholder, ...props }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [sizes, setSizes] = useState({})
    const [source, setSource] = useState(getSource(src, placeholder))

    const previewSource = placeholder ? source.trace : undefined
    const finalSource = placeholder ? source.src : source

    if (!source) return null

    useEffect(() => {
      setLoaded(false)
      setSource(getSource(src, placeholder))
    }, [src, placeholder])

    useEffect(() => {
      const originalImage = new Image()
      originalImage.src = finalSource
      originalImage.onload = () => {
        setSizes({ width: originalImage.width, height: originalImage.height })
        setLoaded(true)
      }
    }, [previewSource, finalSource])

    return (
      <WrappedComponent
        src={isLoaded ? finalSource : previewSource}
        style={isLoaded ? {} : { filter: 'blur(10px)', opacity: 0.5 }}
        {...sizes}
        {...props}
      />
    )
  }

  return Enhanced
}

export default component
