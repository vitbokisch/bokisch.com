import { ComponentType } from 'react'

export type Props = Partial<{
  name: string
  src: string
  alt: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const component: HOC =
  (WrappedComponent) =>
  ({ name, src, ...props }) =>
    <WrappedComponent alt={name} {...props} src={src || `logo-${name}.png`} />

export default component
