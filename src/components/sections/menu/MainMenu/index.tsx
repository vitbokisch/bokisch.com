import { FC } from 'react'
import { Portal } from '@vitus-labs/elements'
import { Provider } from '~/theme'
import { useStore, observer } from '~/store'
import { Container, Row, Col } from '~/components/base/grid'
import section from '~/components/base/Section'
import LinkList from '~/components/base/LinkList'
import ContactList from '~/components/sections/contacts/ContactList'
import Background from './Background'
import Header from './Header'

const Section = section
  .config({ name: 'sections/menu/MainMenu/Section' })
  .attrs({
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme({
    fullScreen: true,
    width: '100%',
    height: '100vh',
    overflowY: { xs: 'scroll', sm: 'hidden' },
    overflowX: 'hidden',
    contentVisibility: null,
  })

type Props = {
  menu: Array<{ label: string; href: string }>
}

const Component: FC<Props> = ({ menu }) => {
  const { runtime } = useStore('')
  const { isOpen } = runtime.menu

  if (!isOpen) return null

  return (
    <Portal>
      <Section>
        <Background />
        <Container
          gutter={0}
          gap={{ xs: 48, sm: 0 }}
          columns={{ xs: 1, sm: 7 }}
        >
          <Header />

          <Row gutter={64}>
            <Col size={{ xs: 1, sm: 2 }}>
              <Provider inversed>
                <LinkList
                  data={menu}
                  gap="xLarge"
                  itemProps={{
                    size: 'large',
                    onClick: runtime.menu.closeMenu,
                  }}
                />
              </Provider>
            </Col>
            <Col size={{ xs: 0, sm: 3 }} />
            <Col size={{ xs: 1, sm: 2 }}>
              <ContactList itemProps={{ light: true }} />
            </Col>
          </Row>
        </Container>
      </Section>
    </Portal>
  )
}

Component.displayName = 'sections/menu/MainMenu'

export default observer(Component)
