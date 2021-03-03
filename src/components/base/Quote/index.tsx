import element from '~/components/core/element'
import text from '~/components/core/text'

const base = element
  .attrs({
    contentDirection: 'rows',
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
  .theme((t, _, v) => ({
    color: v(t.color.dark.base, t.color.light.base),
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

const Author = text
  .config({
    name: 'base/Quote/Author',
  })
  .attrs({
    tag: 'figcaption',
  })
  .theme((t) => ({
    marginTop: t.space.xSmall,
    fontSize: { xs: t.fontSize.small, md: t.fontSize.base },
    fontWeight: 500,
    textAlign: 'right',
  }))

export default base
  .config({ name: 'base/Quote' })
  .attrs<{ quote: string; author: string }>(({ quote, author }) => ({
    tag: 'figure',
    content: () => (
      <Quote>
        <Text>{quote}</Text>
        <Author>— {author}</Author>
      </Quote>
    ),
  }))
