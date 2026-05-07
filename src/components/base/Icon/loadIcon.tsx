import type { AnyComponent } from "~/types"
import { svgs } from '~/assets/icons'

export type Props = Partial<{
  name: string
  label: string
  href: string
  dangerouslySetInnerHTML: { __html: string }
}>

type HOC = (WrappedComponent: AnyComponent<Props>) => AnyComponent<Props>

const createEnhancedComponent = (WrappedComponent: AnyComponent<Props>) => {
  const Enhanced = ({ name, label, href, ...props }: Props) => {
    const image = name ? svgs[name] : undefined

    return (
      <WrappedComponent
        href={href}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SVG content is from trusted local assets loaded at build time
        dangerouslySetInnerHTML={image ? { __html: image } : undefined}
        aria-label={label || name}
        {...props}
      />
    )
  }

  Enhanced.displayName = `LoadIcon(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return Enhanced
}

const Component: HOC = (WrappedComponent) => createEnhancedComponent(WrappedComponent)

export default Component
