import type { ComponentType } from 'react'

type HOC = (WrappedComponent: ComponentType<any>) => ComponentType<any>

const Component: HOC = (WrappedComponent) => {
  const Enhanced = ({ icon, ...props }: any) => <WrappedComponent {...props} />

  return Enhanced
}

export default Component
