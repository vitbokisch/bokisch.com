import { Show } from '@pyreon/core'
import { signal } from '@pyreon/reactivity'
import Background from '~/components/base/Background'
import CardList from '~/components/base/CardList'
import { Col, Container, Row } from '~/components/base/grid'
import Section, { Header } from '~/components/base/Section'
import data from './data'
import ShowMoreButton from './ShowMoreButton'

const firstBatch = data.slice(0, 6).map((item) => ({
  title: item.position,
  subtitle: item.company,
  note: item.date,
  list: item.responsibilities,
}))

const restBatch = data.slice(6).map((item) => ({
  title: item.position,
  subtitle: item.company,
  note: item.date,
  list: item.responsibilities,
}))

const showMore = signal(false)
const toggleShowMore = () => showMore.set(!showMore())

const component = () => (
  <Background state="secondary">
    <Section id="work-experience">
      <Header title="Work Experience">
        Delivered solutions for startups and enterprises. From building MVPs to
        scaling production systems, I've solved real problems at every stage.
      </Header>

      <Container
        width={{ xs: '90%', lg: 980, xl: 1380 }}
        columns={12}
        size={{ xs: 12, md: 6, lg: 4 }}
        gap={{ xs: 24, md: 32 }}
        gutter={0}
        contentAlignX="center"
      >
        <Row>
          <CardList
            data={firstBatch}
            wrapComponent={Col}
            itemProps={{ state: 'secondary' }}
          />

          <Show when={showMore}>
            <CardList
              data={restBatch}
              wrapComponent={Col}
              itemProps={{ state: 'secondary' }}
            />
          </Show>
        </Row>
      </Container>

      <Show
        when={showMore}
        fallback={
          <ShowMoreButton
            onClick={toggleShowMore}
            label="See more work experience"
          />
        }
      >
        <ShowMoreButton
          onClick={toggleShowMore}
          label="See less work experience"
        />
      </Show>
    </Section>
  </Background>
)

component.displayName = 'sections/resume/WorkExperience'
export default component
