import React, { FC } from 'react'
import { IStore, useStore, observer } from '~/store'
import { Container, Row, Col } from '~/components/base/grid'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import ProgressBoxList from '~/components/base/ProgressBoxList'

type Props = {
  store?: IStore
}

const component: FC<Props> = () => {
  const store = useStore('')

  return (
    <Background primary>
      <Section>
        <Header title="Knowledge">
          The preparation is the key for a smooth website design and development
          project. Broad knowledge from planning to launch stage is key for
          meeting requirements and effective realization with less headaches. I
          can speak Czech, English and modern JavaScript ;)
        </Header>

        <Container
          gap={60}
          width={{ xs: '80%', md: 740 }}
          gutter={0}
          columns={2}
          size={{ xs: 2, sm: 1 }}
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

component.displayName = 'sections/Knowledge'
export default observer(component)
