// @ts-nocheck

const component = (WrappedComponent) => {
  const Enhanced = ({ name, ...props }) => {
    const nameSource = name ? `logo-${name}.png` : undefined

    return <WrappedComponent src={nameSource} alt={name} {...props} />
  }

  return Enhanced
}

export default component
