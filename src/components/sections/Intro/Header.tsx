import { type FC, useState } from 'react'
import { useWindowResize } from '@vitus-labs/hooks'
import Base from '~/components/base/Base'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'

const Component: FC = () => {
  const [windowSizes, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useWindowResize({
    throttleDelay: 200,
    onChange: setWindowSize,
  })

  return (
    <Base
      block
      beforeContentDirection="rows"
      beforeContent={Logo}
      afterContent={windowSizes.width >= 576 ? <ThemeSwitch /> : null}
    />
  )
}

Component.displayName = 'sections/Intro/Header'

export default Component
