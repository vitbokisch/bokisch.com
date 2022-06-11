import { FC } from 'react'
import { useStore, observer } from '~/store'
import Background from '~/components/base/Background'
import Section, { Header } from '~/components/base/Section'
import Timeline from '~/components/base/Timeline'
import Tabs from './Tabs'

const states = {
  1: 'primary',
  2: 'secondary',
  3: 'tertiary',
  4: 'neutral',
} as const

type Keys = keyof typeof states
type Values = typeof states[Keys]

type TransformedData = (
  data: Array<{
    company: string
    type: 1 | 2 | 3 | 4
    date: string
    position: string
    responsibilities: string[]
  }>
) => Array<{
  company: string
  date: string
  position: string
  responsibilities: string[]
  state: Values
}>

const transformedData: TransformedData = (data) =>
  data.map((item) => ({
    company: item.company,
    date: item.date,
    position: item.position,
    responsibilities: item.responsibilities,
    state: states[item.type],
  }))

const Component: FC = () => {
  const store = useStore('')

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
        <Timeline data={transformedData(store.career?.dataByType as any)} />
      </Section>
    </Background>
  )
}

Component.displayName = 'sections/CertificatesHobbies'
export default observer(Component)
