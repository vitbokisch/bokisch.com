import Background from "~/components/base/Background";
import CardList from "~/components/base/CardList";
import { Col, Container, Row } from "~/components/base/grid";
import Section, { Header } from "~/components/base/Section";
import data from "./data";

const transformedData = data.map((item) => ({
  title: item.name,
  subtitle: item.field,
  note: item.year,
  logo: item.logo,
}));

const component = () => (
  <Background secondary>
    <Section id="education">
      <Header title="Education">
        Global education shaped my thinking. I studied in Czechia, Belgium and
        China — different cultures, different methods, different problems. That
        perspective is invaluable. Bachelor&apos;s degree, with real-world
        perspective.
      </Header>

      <Container
        width={{ xs: "90%", lg: 980 }}
        columns={12}
        size={{ xs: 12, sm: 8, md: 6 }}
        gap={{ xs: 24, md: 32 }}
        gutter={0}
        contentAlignX="center"
      >
        <Row>
          <CardList
            data={transformedData}
            wrapComponent={Col}
            itemProps={{ state: "secondary" }}
          />
        </Row>
      </Container>
    </Section>
  </Background>
);

component.displayName = "sections/Knowledge";
export default component;
