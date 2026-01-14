import  { type FC, useState } from 'react'
import Background from '~/components/base/Background'
import CardList from '~/components/base/CardList'
import { Col, Container, Row } from '~/components/base/grid'
import Section, { Header } from '~/components/base/Section'
import ShowMoreButton from './ShowMoreButton'
import data from './data'

const transformedData = data.map((item) => ({
  title: item.position,
  subtitle: item.company,
  note: item.date,
  list: item.responsibilities,
}))

const component: FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const itemsList = showMore ? transformedData : transformedData.slice(0, 6);
  const showMoreLabel = showMore ? "See less work experience" : "See more work experience";

  return (
  <Background secondary>
    <Section id="work-experience">
      <Header title="Work Experience">
        Delivered solutions for startups and enterprises. From building MVPs to
        scaling production systems, I've solved real problems at every stage.
      </Header>

      <Container
        width={{ xs: '90%', xl: 1380 }}
        columns={6}
        size={{ xs: 6, sm: 3, md: 2 }}
        gap={{ xs: 32, md: 64 }}
        gutter={0}
        contentAlignX="center"
      >
        <Row>
          <CardList data={itemsList} wrapComponent={Col} itemProps={{ state:'secondary' }} />
        </Row>
      </Container>

      <ShowMoreButton onClick={toggleShowMore} label={showMoreLabel} />
    </Section>
  </Background>
)}

component.displayName = 'sections/Knowledge'
export default component
