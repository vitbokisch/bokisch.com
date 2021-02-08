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

const Text = text
  .config({
    name: 'base/Quote/Text',
  })
  .attrs({
    paragraph: true,
  })
  .theme((t) => ({
    fontSize: t.fontSize.xxLarge,
    fontStyle: 'italic',
    textAlign: 'center',
  }))

const Author = element
  .config({
    name: 'base/Quote/Author',
  })
  .attrs({
    tag: 'figcaption',
    block: true,
    contentAlignX: 'right',
  })
  .theme((t) => ({
    marginTop: t.space.xSmall,
    fontSize: t.fontSize.base,
    fontWeight: 500,
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
