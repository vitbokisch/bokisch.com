import { element, text } from '~/components/core'
import filterProps from './hoc'

const base = element
  .attrs({
    contentAlignX: 'block',
  })
  .theme((t) => ({ margin: t.space.reset }))

const Quote = base
  .config({
    name: 'base/Quote/Quote',
  })
  .attrs({
    tag: 'blockquote',
  })
  .theme((t, m) => ({
    color: m(t.color.dark.base, t.color.light.base),
  }))

const Text = text
  .config({
    name: 'base/Quote/Text',
  })
  .attrs({
    paragraph: true,
  })
  .theme((t) => ({
    fontSize: {
      xs: t.fontSize.medium,
      sm: t.fontSize.large,
      md: t.fontSize.xxLarge,
    },
    fontStyle: 'italic',
    textAlign: 'center',
  }))

export default base
  .config({ name: 'base/Quote' })
  .compose({ filterProps })
  .attrs<{ quote: string }>(({ quote }) => ({
    tag: 'figure',
    content: () => (
      <Quote>
        <Text>{quote}</Text>
      </Quote>
    ),
  }))
