// @ts-nocheck

const component = (WrappedComponent) => {
  const Enhanced = ({ name, ...props }) => {
    const nameSource = name
      ? require(`~/assets/images/logo-${name}.png?url`)
      : undefined

    return <WrappedComponent alt={name} {...props} src={nameSource} />
  }

  return Enhanced
}

export default component
