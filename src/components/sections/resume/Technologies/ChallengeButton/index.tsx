import { FC, useState } from 'react'
import button from '~/components/base/Button'

const Button = button.theme((t) => ({
  marginTop: t.space.large,
}))

const Component: FC = () => {
  const [isHover, setHover] = useState(false)

  return (
    <Button
      primary
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      label="Give me a new challenge"
      href={isHover ? 'mailto:vit@bokisch.cz' : '#'}
    />
  )
}

export default Component
