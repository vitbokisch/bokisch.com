import { text } from '~/components/core'

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

type GetTag = (props: Record<string, unknown>) => Tag
const getTag: GetTag = (props) => {
  // Support both boolean shorthand (`<Heading level1>`) and structured form
  // (`<Heading size="level1">`). With `useBooleans: true` boolean shorthand
  // resolves to `size="levelN"` only after dimension resolution, so attrs
  // callbacks must read both forms.
  if (props.level1 || props.size === 'level1') return 'h1'
  if (props.level2 || props.size === 'level2') return 'h2'
  if (props.level3 || props.size === 'level3') return 'h3'
  if (props.level4 || props.size === 'level4') return 'h4'
  if (props.level5 || props.size === 'level5') return 'h5'

  return 'span'
}

export default text
  .config({
    name: 'base/Heading',
  })
  .attrs<{ tag?: Tag }>((props) => ({
    tag: getTag(props),
  }))
  .theme((t, m) => ({
    color: m(t.color.dark.base, t.color.light.base),
    fontSize: t.fontSize.base,
    lineHeight: t.lineHeight.reset,
    fontWeight: 500,
  }))
  .sizes((t) => ({
    level1: {
      fontSize: {
        xs: t.fontSize.xxxLarge,
        sm: t.fontSize.xxxxLarge,
        lg: t.fontSize.jumbo,
      },
      textTransform: 'uppercase',
    },
    level2: {
      fontSize: { xs: t.fontSize.xxLarge, sm: 48, lg: t.fontSize.xxxLarge },
    },
    level3: {
      fontSize: { xs: t.fontSize.medium, lg: t.fontSize.large },
    },
    level4: {
      fontSize: { xs: 18, lg: t.fontSize.medium },
    },
    level5: {
      fontSize: { xs: t.fontSize.small, md: t.fontSize.base },
    },
  }))
  .variants((t) => ({
    indentLarge: {
      marginBottom: t.space.large,
    },
    indentMedium: {
      marginBottom: t.space.medium,
    },
    indentReset: {
      marginBottom: t.space.reset,
    },
  }))
