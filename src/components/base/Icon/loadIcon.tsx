import { useEffect, useState, ComponentType } from 'react'

export type Props = Partial<{
  name: string
  label: string
  href: string
  dangerouslySetInnerHTML: any
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const component: HOC =
  (WrappedComponent) =>
  ({ name, label, href, ...props }) => {
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

export default component
