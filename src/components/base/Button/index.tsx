import element from '~/components/core/element'

export default element
  .attrs<{ href?: string; onClick?: MouseEvent }>(({ href, onClick }) => {
    const isLink = !!href
    const isStatic = !!href || !!onClick
    const dynamicTag = isLink ? 'a' : 'button'

    const tag = isStatic ? 'span' : dynamicTag

    return {
      tag,
    }
  })
  .theme((t) => ({
    height: 48,
    fontSize: t.fontSize.base,
    paddingX: t.space.large,
    borderRadius: t.borderRadius.base,
    color: t.color.light.base,
    borderWidth: t.borderWidth.base,
    borderStyle: 'solid',
    backgroundColor: t.color.primary.base,
    borderColor: t.color.primary.base,
    textAlign: 'center',
    outline: 'none',

    hover: {
      backgroundColor: t.color.primary.hover,
      borderColor: t.color.primary.hover,
    },
    pressed: {
      backgroundColor: t.color.primary.pressed,
      borderColor: t.color.primary.pressed,
    },
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        backgroundColor: t.color.primary.hover,
        borderColor: t.color.primary.hover,
      },
      pressed: {
        backgroundColor: t.color.primary.pressed,
        borderColor: t.color.primary.pressed,
      },
    },
    secondary: {
      backgroundColor: t.color.secondary.base,
      borderColor: t.color.secondary.base,

      hover: {
        backgroundColor: t.color.secondary.hover,
        borderColor: t.color.secondary.hover,
      },
      pressed: {
        backgroundColor: t.color.secondary.pressed,
        borderColor: t.color.secondary.pressed,
      },
    },
    tertiary: {
      backgroundColor: t.color.tertiary.base,
      borderColor: t.color.tertiary.base,

      hover: {
        backgroundColor: t.color.tertiary.hover,
        borderColor: t.color.tertiary.hover,
      },
      pressed: {
        backgroundColor: t.color.tertiary.pressed,
        borderColor: t.color.tertiary.pressed,
      },
    },
    neutral: {
      backgroundColor: t.color.neutral.base,
      borderColor: t.color.neutral.base,

      hover: {
        backgroundColor: t.color.neutral.hover,
        borderColor: t.color.neutral.hover,
      },
      pressed: {
        backgroundColor: t.color.neutral.pressed,
        borderColor: t.color.neutral.pressed,
      },
    },
  }))
  .variants({
    inversed: true,
  })
