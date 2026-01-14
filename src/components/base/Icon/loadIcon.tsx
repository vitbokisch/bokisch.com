import { useEffect, useState, type ComponentType } from 'react'

export type Props = Partial<{
  name: string
  label: string
  href: string
  dangerouslySetInnerHTML: { __html: string }
}>

const getImage = async (img?: string): Promise<string | null> => {
  if (img) {
    const asset = await import(`~/assets/icons/${img}.svg?include`)
    return asset.default as string
  }

  return null
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

// Create the Enhanced component outside the HOC to avoid nesting
const createEnhancedComponent = (WrappedComponent: ComponentType<Props>) => {
  const Enhanced = ({ name, label, href, ...props }: Props) => {
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
      const getAsyncImg = async () => {
        const loadedImage = await getImage(name)
        setImage(loadedImage)
      }

      getAsyncImg()
    }, [name])

    return (
      <WrappedComponent
        href={href}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SVG content is from trusted local assets loaded at build time
        dangerouslySetInnerHTML={
          image
            ? {
                __html: image,
              }
            : undefined
        }
        aria-label={label || name}
        {...props}
      />
    )
  }

  Enhanced.displayName = `LoadIcon(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => {
  return createEnhancedComponent(WrappedComponent)
}

export default Component
