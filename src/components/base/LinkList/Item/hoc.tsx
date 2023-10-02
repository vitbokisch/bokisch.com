import { ComponentType } from 'react'

type HOC = (WrappedComponent: ComponentType<any>) => ComponentType<any>

const Component: HOC = (WrappedComponent) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Enhanced = ({ icon, ...props }: any) => <WrappedComponent {...props} />

  return Enhanced
}

export default Component
