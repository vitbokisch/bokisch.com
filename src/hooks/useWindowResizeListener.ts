import { useEffect } from 'react'
import { useWindowResize } from '@vitus-labs/hooks'

type Props = {
  update: (props: { height: number; width: number }) => void
}
const useWindowResizeListener = ({ update }: Props) => {
  const { height, width } = useWindowResize()

  useEffect(() => {
    update({ height, width })
  }, [update, height, width])
}

export default useWindowResizeListener
