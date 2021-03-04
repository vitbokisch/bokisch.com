import { useEffect, useState, VFC } from 'react'
import { element } from '~/components/core'

type Props = { src: string; alt?: string }

const component: VFC<Props> = ({ src, alt = '', ...props }) => {
  const [sizes, setSizes] = useState({})

  useEffect(() => {
    const originalImage = new Image()
    originalImage.src = src
    originalImage.onload = () => {
      setSizes({ width: originalImage.width, height: originalImage.height })
    }
  }, [src])

  return <img src={src} alt={alt} {...sizes} {...props} />
}

export default element.config({ name: 'base/Image', component }).variants({
  responsive: {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
  },
})
