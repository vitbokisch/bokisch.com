import { type FC } from 'react'
import button from '~/components/base/Button'

const Button = button.theme((t) => ({
  marginTop: t.space.xxLarge,
}))

type Props = {
  onClick: () => void
  label: string
}

const Component: FC<Props> = ({ label, onClick }) => (
    <Button
      primary
      onClick={onClick}
      label={label}
    />
  )


export default Component
