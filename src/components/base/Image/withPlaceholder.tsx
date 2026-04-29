import NextImage from 'next/image'
import { type CSSProperties, type Ref, forwardRef } from 'react'
import { images } from '~/assets/images'

type Props = {
  src?: string
  alt?: string
  placeholder?: boolean
  loading?: 'eager' | 'lazy'
  className?: string
  style?: CSSProperties
}

const Component = forwardRef<HTMLImageElement, Props>(
  ({ src, alt, placeholder, loading, className, style }, ref: Ref<HTMLImageElement>) => {
    if (!src) return null

    const staticSrc = images[src]
    if (!staticSrc) return null

    return (
      <NextImage
        ref={ref}
        src={staticSrc}
        alt={alt ?? ''}
        loading={loading ?? 'lazy'}
        placeholder={placeholder ? 'blur' : 'empty'}
        className={className}
        style={style}
      />
    )
  }
)

Component.displayName = 'base/Image/NextImage'

export default Component
