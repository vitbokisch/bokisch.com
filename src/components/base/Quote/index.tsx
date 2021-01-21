import text from '~/components/core/text'

export default text
  .config({ name: 'base/Quote' })
  .attrs({
    tag: 'blockquote',
  })
  .theme((t) => ({
    fontSize: 32,
    fontStyle: 'italic',
    textAlign: 'center',
  }))
