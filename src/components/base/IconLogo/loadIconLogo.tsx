import type { ComponentType } from 'react'

export type Props = Partial<{
  name: string
  src: string
  alt: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ name, src, ...props }: Props) => (
    <WrappedComponent alt={name} {...props} src={src} />
  )

  return Enhanced
}

export default Component
