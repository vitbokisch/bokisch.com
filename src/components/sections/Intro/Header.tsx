import { useWindowResize } from '@pyreon/hooks'
import Base from '~/components/base/Base'
import Logo from '~/components/sections/brand/Logo'
import ThemeSwitch from '~/components/sections/theme/ThemeSwitch'

const Component = () => {
  const size = useWindowResize(200)

  return (
    <Base
      block
      beforeContentDirection="rows"
      beforeContent={Logo}
      afterContent={() => (size().width >= 576 ? <ThemeSwitch /> : null)}
    />
  )
}

Component.displayName = 'sections/Intro/Header'

export default Component
