import { useEffect, useState, type ComponentType } from 'react'

export type Props = Partial<{
  src: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ src, ...props }: Props) => {
    const [sizes, setSizes] = useState({})

    useEffect(() => {
      if (src) {
        const originalImage = new Image()
        originalImage.src = src
        originalImage.onload = () => {
          setSizes({ width: originalImage.width, height: originalImage.height })
        }
      }
    }, [src])

    if (!src) return null

    return <WrappedComponent src={src} {...sizes} {...props} />
  }

  return Enhanced
}

export default Component
