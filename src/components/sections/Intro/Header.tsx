import { type FC, useEffect, useState } from 'react'
import { useWindowResize } from '@vitus-labs/hooks'
import Base from '~/components/base/Base'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'

const Component: FC = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useWindowResize({
    throttleDelay: 200,
    onChange: ({ width }) => setWidth(width),
  })

  return (
    <Base
      block
      beforeContentDirection="rows"
      beforeContent={Logo}
      afterContent={width >= 576 ? <ThemeSwitch /> : null}
    />
  )
}

Component.displayName = 'sections/Intro/Header'

export default Component
