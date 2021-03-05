// @ts-nocheck

const component = (WrappedComponent) => {
  const Enhanced = ({ name, label, href, ...props }) => (
    <WrappedComponent
      href={href}
      dangerouslySetInnerHTML={
        name
          ? {
              __html: require(`~/assets/icons/${name}.svg?include`),
            }
          : undefined
      }
      aria-labelledby={label || name}
      {...props}
    />
  )

  return Enhanced
}

export default component
