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
          Having a broaad knowledge from several fields is important to
          understand. Having a broad knowledge important to understand from
          several is.
        </Header>
        <Timeline data={store.career?.data} />
      </Section>
    </Background>
  )
}

component.displayName = 'sections/CertificatesHobbies'
export default observer(component)
