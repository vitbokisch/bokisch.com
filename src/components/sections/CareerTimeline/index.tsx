import React from 'react'
import Element from '~/components/base/Element'
import { Container } from '~/components/base/grid'
import Background from '~/components/base/Background'
import Section from '~/components/base/Section'
import Header from '~/components/fragments/section/Header'
import list from '~/components/core/list'
import Timeline, { Box } from '~/components/base/timeline'
import data from './data'

const splitData = (data) => {
  const leftSide = []
  const rightSide = []

  data.forEach((item, i) => {
    if (i % 2 === 0) rightSide.push(item)
    else leftSide.push(item)
  })

  return { leftSide, rightSide }
}

const List = list.attrs({ component: Box })

const component = () => (
  <Background secondary>
    <Section>
      <Header title="Career Timeline">
        Having a broaad knowledge from several fields is important to
        understand. Having a broad knowledge important to understand from
        several is.
      </Header>

      <Timeline data={data} />

      {/* <Container columns={2} size={1} width={960}>
        <Element
          gap={80}
          beforeContent={
            <List
              itemProps={{ odd: true }}
              data={splitData(data).leftSide}
              css={`
                margin-top: 160px;
              `}
            />
          }
          afterContent={
            <List itemProps={{ even: true }} data={splitData(data).rightSide} />
          }
        />
      </Container> */}
    </Section>
  </Background>
)

component.displayName = 'sections/CertificatesHobbies'
export default component
