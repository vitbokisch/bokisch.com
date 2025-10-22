import type { ComponentType } from 'react'
import link from '../Link'

const Link = link.attrs({
  contentAlignX: 'block',
})

export type Props = Partial<{
  link: string
  name: string
}>

type HOC = (WrappedComponent: ComponentType<Props>) => ComponentType<Props>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({
    link,
    name,
    image,
    ...props
  }: Props & { image?: string }) => {
    const Result = <WrappedComponent {...props} name="" />

    if (link) return <Link href={link}>{Result}</Link>

    return Result
  }

  return Enhanced
}

export default Component
