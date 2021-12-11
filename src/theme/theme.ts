const theme = {
  rootSize: 16,
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  grid: {
    columns: 12,
    container: {
      xs: '90%',
      sm: 540,
      md: 700,
      lg: 940,
      xl: 1140,
      xxl: 1280,
    },
  },
  space: {
    reset: 0,
    xSmall: 8,
    small: 12,
    medium: 16,
    large: 24,
    xLarge: 32,
    xxLarge: 64,
  },
  fontFamily: {
    base: 'Ubuntu',
  },
  fontSize: {
    small: 14,
    base: 16,
    medium: 20,
    large: 24,
    xLarge: 28,
    xxLarge: 32,
    xxxLarge: 54,
    jumbo: 120,
  },
  lineHeight: {
    reset: 1,
    small: 1.2,
    base: 1.7,
    large: 2,
  },
  borderWidth: {
    base: 1,
  },
  borderStyle: {
    base: 'solid',
  },
  borderRadius: {
    base: 8,
    large: 12,
    extra: 180,
  },
  transition: {
    base: 'all .15s ease-in-out',
  },
  gradient: {
    base: {
      light: 'linear-gradient(180deg, #FBFBFB 0%, #FFFFFF 100%)',
      dark: 'linear-gradient(180deg, #212121 0%, #272727 100%)',
    },
    triangle: {
      light: 'linear-gradient(143.05deg, #F7FCFF 22.41%, #D6F1FF 158.6%)',
      dark: 'linear-gradient(143.05deg, #313D44 22.41%, #273034 158.6%)',
    },
  },
  shadow: {
    light: {
      small: '0px 2px 16px rgba(211, 211, 211, 0.5)',
      large: '0px 2px 44px rgba(211, 211, 211, 0.5)',
    },
    dark: {
      small: '0px 2px 16px rgba(61, 61, 61, 0.5)',
      large: '0px 2px 44px rgba(61, 61, 61, 0.5)',
    },
  },
  color: {
    transparent: 'transparent',
    light: {
      base: '#FFFFFF',
      100: '#FBFBFB',
      200: '#F1F1F1',
    },
    dark: {
      base: '#272727',
      100: '#212121',
      200: '#3F3F3F',
    },
    primary: {
      base: '#954EA4',
      medium: '#71307E',
      dark: '#461950',
    },
    secondary: {
      base: '#5066B3',
      medium: '#374C96',
      dark: '#27366C',
    },
    tertiary: {
      base: '#91C8CF',
      medium: '#45939D',
      dark: '#285E65',
    },
    neutral: {
      base: '#C9C9C9',
      medium: '#A9A9A9',
      dark: '#696969',
    },
  },
} as const

export type Theme = typeof theme

export default theme
