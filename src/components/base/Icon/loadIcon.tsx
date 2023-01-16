import { useEffect, useState, ComponentType } from 'react'

export type Props = Partial<{
  name: string
  label: string
  href: string
  dangerouslySetInnerHTML: any
}>

const getImage = (name?: string) => {
  if (name) {
    const asset = require(`~/assets/icons/${name}.svg?include`).default
    return asset
  }

  return null
}

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ name, label, href, ...props }: Props) => {
    const [image, setImage] = useState(getImage(name))

    useEffect(() => {
      const image = getImage(name)
      setImage(image)
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
