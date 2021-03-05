// @ts-nocheck
import { useEffect, useState } from 'react'

type Props = { src?: string; alt?: string }

// const getSource = (src) => {
//   if (!src) return undefined

//   return require(`~/assets/images/${src}?webp`)
// }

const component = (WrappedComponent) => {
  const Enhanced = ({ src, ...props }) => {
    const [sizes, setSizes] = useState({})

    if (!src) return null

    useEffect(() => {
      const originalImage = new Image()
      originalImage.src = src
      originalImage.onload = () => {
        setSizes({ width: originalImage.width, height: originalImage.height })
      }
    }, [src])

    return <WrappedComponent src={src} {...sizes} {...props} />
  }

  return Enhanced
}

export default component
