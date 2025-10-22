import { useEffect, useState, type ComponentType } from 'react'

export type Props = Partial<{
  name: string
  label: string
  href: string
  dangerouslySetInnerHTML: any
}>

const getImage = async (img?: string) => {
  if (img) {
    const asset = await import(`~/assets/icons/${img}.svg?include`)
    return asset.default
  }

  return null
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ name, label, href, ...props }: Props) => {
    const [image, setImage] = useState()

    useEffect(() => {
      const getAsyncImg = async () => {
        const image = await getImage(name);
        setImage(image);
      }

      getAsyncImg()
    }, [name])

    return (
      <WrappedComponent
        href={href}
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

  return Enhanced
}

export default Component
