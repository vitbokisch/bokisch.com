import { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import { Container, Row, Col } from '~/components/base/grid'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import ProgressBoxList from '~/components/base/ProgressBoxList'

type Props = {
  store?: IStore
}

const Component: FC<Props> = () => {
  const store = useStore('')

  return (
    <Background primary>
      <Section id="knowledge">
        <Header title="Knowledge">
          Preparation is the key to a smooth website design and development
          project. Broad knowledge from the planning to launch stage is key for
          meeting requirements and effective realization with fewer headaches.
        </Header>

        <Container
          gap={64}
          width={({ xs }) => ({ xs, md: 700, lg: 740 })}
          gutter={0}
          columns={12}
          size={{ xs: 11, sm: 6 }}
          contentAlignX="center"
        >
          <Row>
            <ProgressBoxList
              data={store.knowledge?.data as Array<any>}
              wrapComponent={Col}
            />
          </Row>
        </Container>
      </Section>
    </Background>
  )
}

Component.displayName = 'sections/Knowledge'
export default observer(Component)
