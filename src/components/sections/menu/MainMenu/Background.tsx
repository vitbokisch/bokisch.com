import element from '~/components/core/element'

// const BackgroundMobile = element.theme((t) => ({
//   fullScreen: true,
//   backgroundColor: t.color.dark[100],
// }))

const BackgroundLeft = element.theme({
  position: 'absolute',
  width: '60%',
  height: 'inherit',
  top: 0,
  left: '0',
  bottom: 0,
  clipPath: 'polygon(100% 0, 85% 50%, 100% 100%, 0 100%, 0 0)',
  background: `linear-gradient(
        180deg,
        #656b6a 0%,
        #666b6b 48.96%,
        #6a6f6e 100%
      )`,
})

const BackgroundRight = element.theme({
  position: 'absolute',
  width: '50%',
  height: 'inherit',
  top: 0,
  right: 0,
  bottom: 0,
  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)',
  background: `linear-gradient(180deg, #303030 0%, #1b1b1b 100%)`,
})

const component = () => (
  <>
    {/* <BackgroundMobile /> */}
    <BackgroundLeft />
    <BackgroundRight />
  </>
)

export default component
