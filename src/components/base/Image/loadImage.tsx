import { useEffect, useState, ComponentType } from 'react'

export type Props = Partial<{
  src: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const component: HOC =
  (WrappedComponent) =>
  ({ src, ...props }) => {
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

export default component
