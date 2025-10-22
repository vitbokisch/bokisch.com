import type { ComponentType } from 'react'

type HOC = (WrappedComponent: ComponentType<any>) => ComponentType<any>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ author, quote, ...props }: any) => (
    <WrappedComponent {...props} />
  )

  return Enhanced
}

export default Component
