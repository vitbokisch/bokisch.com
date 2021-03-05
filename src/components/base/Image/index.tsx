import { VFC } from 'react'
import { element } from '~/components/core'
import loadImage from './loadImage'

type Props = { src?: string; alt?: string }

const component: VFC<Props> = ({ src, alt = '', ...props }) => (
  <img loading="lazy" src={src} alt={alt} {...props} />
)

export default element
  .config({ name: 'base/Image', component })
  .compose({ loadImage })
  .attrs<{ placeholder?: boolean }>({})
  .variants({
    responsive: {
      width: '100%',
      height: '100%',
      objectFit: 'scale-down',
    },
  })
