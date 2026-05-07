import { For } from '@pyreon/core'
import Background from '~/components/base/Background'
import Card from '~/components/base/Card'
import { Col, Container, Row } from '~/components/base/grid'
import heading from '~/components/base/Heading'
import Link from '~/components/base/Link'
import Section, { Header } from '~/components/base/Section'
import text from '~/components/base/Text'
import { element } from '~/components/core'
import { groups } from './data'

const GroupBlock = element
  .attrs({ block: true })
  .theme((t) => ({ marginTop: t.space.xLarge }))

const GroupTitle = heading.theme((t, m) => ({
  marginBottom: t.space.xSmall,
  fontSize: { xs: t.fontSize.large, md: t.fontSize.xLarge },
  textAlign: 'center',
  color: m(t.color.dark.base, t.color.light.base),
}))

const GroupSubtitle = text.theme((t, m) => ({
  marginBottom: t.space.large,
  color: m(t.color.dark.base, t.color.light.base),
  fontSize: { xs: t.fontSize.small, md: t.fontSize.base },
  textAlign: 'center',
}))

const GroupLinks = text.theme((t) => ({
  marginBottom: t.space.large,
  fontSize: t.fontSize.base,
  textAlign: 'center',
}))

const GroupFooter = text.theme((t, m) => ({
  marginTop: t.space.medium,
  color: m(t.color.dark.base, t.color.light.base),
  fontSize: t.fontSize.base,
  lineHeight: t.lineHeight.base,
  textAlign: 'center',
}))

const component= () => (
  <Background primary>
    <Section id="open-source">
      <Header title="Open Source">
        Libraries and tools I've built and maintain. Born from real product
        constraints, refined across years of shipping, and open for the
        community to build on.
      </Header>

      <For
        each={() => groups}
        by={(group: (typeof groups)[number]) => group.title}
      >
        {(group: (typeof groups)[number]) => {
          const more = group.totalPackages - group.packages.length
          return (
            <GroupBlock>
              <Container contentAlignX="center">
                <Row>
                  <Col size={{ xs: 12, md: 10 }}>
                    <GroupTitle tag="h3" label={group.title} />
                    <GroupSubtitle>{group.tagline}</GroupSubtitle>
                    <GroupLinks>
                      <Link primary href={group.github}>
                        GitHub
                      </Link>{' '}
                      ·{' '}
                      <Link primary href={group.docs}>
                        Documentation
                      </Link>
                    </GroupLinks>
                  </Col>
                </Row>
              </Container>

              <Container
                width={{ xs: '90%', lg: 980, xl: 1380 }}
                columns={12}
                size={{ xs: 12, md: 6, lg: 4 }}
                gap={{ xs: 24, md: 32 }}
                gutter={0}
                contentAlignX="center"
              >
                <Row>
                  <For
                    each={() => group.packages}
                    by={(pkg: (typeof group.packages)[number]) => pkg.title}
                  >
                    {(pkg: (typeof group.packages)[number]) => {
                      const list = pkg.features
                        ? pkg.features.map((label) => ({ label }))
                        : pkg.description
                          ? [{ label: pkg.description }]
                          : undefined
                      return (
                        <Col>
                          <Card
                            title={pkg.title}
                            subtitle={pkg.tagline}
                            list={list}
                            state="secondary"
                          />
                        </Col>
                      )
                    }}
                  </For>
                </Row>
              </Container>

              <Container contentAlignX="center">
                <Row>
                  <Col size={{ xs: 12, md: 8 }}>
                    <GroupFooter>
                      {more > 0 &&
                        `+${more} more${group.moreDescription ? ` ${group.moreDescription}` : ''}`}
                    </GroupFooter>
                  </Col>
                </Row>
              </Container>
            </GroupBlock>
          )
        }}
      </For>
    </Section>
  </Background>
)

component.displayName = 'sections/resume/OpenSource'
export default component
