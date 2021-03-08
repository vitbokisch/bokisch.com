// @ts-nocheck

const component = (WrappedComponent) => {
  const Enhanced = ({ name, ...props }) => {
    return <WrappedComponent alt={name} {...props} src={`logo-${name}.png`} />
  }

  return Enhanced
}

export default component
