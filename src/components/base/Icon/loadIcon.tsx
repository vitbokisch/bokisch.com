import { useEffect, useState, ComponentType } from 'react'

export type Props = Partial<{
  name: string
  label: string
  href: string
  dangerouslySetInnerHTML: any
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ name, label, href, ...props }: Props) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
      if (name) {
        import(`~/assets/icons/${name}.svg?include`)
          .then((value) => {
            setImage(value.default)
          })
          .catch(() => {
            setImage(null)
          })
      }
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
