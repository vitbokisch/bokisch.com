import type { FC } from 'react'
import BadgeList from '~/components/base/BadgeList'
import technologiesData from './data'

const transformedData = technologiesData.map((item) => ({
  label: item.title,
  href: item.link || undefined,
}))

const Component: FC = () => {
  return (
    <BadgeList
      data={transformedData}
      gap="medium"
      gapY="medium"
      contentAlignX="center"
    />
  )
}

export default Component
