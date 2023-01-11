import { FC } from 'react'
import { useStore, observer } from '~/store'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import Timeline from '~/components/sections/timeline/Timeline'
import Tabs from './Tabs'

const Component: FC = () => {
  const store = useStore('')

  const data = store.career?.dataByType.map((item) => ({
    company: item.company,
    date: item.date,
    position: item.position,
    responsibilities: item.responsibilities.map((item) => item),
    state: item.state,
  }))

  return (
    <Background gradient>
      <Section id="career-timeline">
        <Header title="Career Timeline">
          I have experience from different business fields, international
          companies, positions, company cultures, and ways of working in teams.
          I enjoy open and respectful company culture(s) built on trust and
          working in more agile environments and cross-functional teams.
        </Header>
        <Tabs />
        {data && data?.length > 0 && <Timeline data={data} />}
      </Section>
    </Background>
  )
}

Component.displayName = 'sections/CertificatesHobbies'
export default observer(Component)
