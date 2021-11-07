module.exports = {
  favicon: {
    appName: 'Vit Bokisch',
    appShortName: 'Vit Bokisch',
    appDescription: 'My personal website',
    developerName: 'Vit Bokisch <vit@bokisch.cz>',
    developerURL: 'https://bokisch.com',
    path: `/favicon`,
    icons: [
      {
        input: 'src/assets/favicon/light.svg',
        output: 'public/favicon/light',
        path: 'light',
      },
      {
        input: 'src/assets/favicon/dark.svg',
        output: 'public/favicon/dark',
        path: 'dark',
      },
    ],
  },
}
