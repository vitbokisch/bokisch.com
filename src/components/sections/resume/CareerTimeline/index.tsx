import { VFC } from 'react'
import { useStore, observer } from '~/store'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import Timeline from '~/components/base/Timeline'

const component: VFC = () => {
  const store = useStore('')

  return (
    <Background gradient>
      <Section id="career-timeline">
        <Header title="Career Timeline">
          I have experience from different fields, international companies,
          positions, company cultures, and ways of working in teams
        </Header>
        <Timeline data={store.career?.data as any} />
      </Section>
    </Background>
  )
}

component.displayName = 'sections/CertificatesHobbies'
export default observer(component)
