const theme = {
  isDark: false,
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
      xs: '100%',
      sm: 540,
      md: 720,
      lg: 960,
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
    xxLarge: 54,
    jumbo: 120,
  },
  lineHeight: {
    reset: 1,
    small: 1.2,
    base: 1.5,
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
    extra: 180,
  },
  color: {
    transparent: 'transparent',
    light: {
      base: '#FFF',
      hover: '',
      pressed: '',
      100: '#FBFBFB',
      200: '#F1F1F1',
    },
    dark: {
      base: '#272727',
      hover: '',
      pressed: '',
    },
    primary: {
      base: '#954EA4',
      hover: '#71307E',
      pressed: '#461950',
    },
    secondary: {
      base: '#5066B3',
      hover: '#374C96',
      pressed: '#27366C',
    },
    tertiary: {
      base: '#91C8CF',
      hover: '#45939D',
      pressed: '#285E65',
    },
    neutral: {
      base: 'rgba(39, 39, 39, 0.2)',
      hover: '#A9A9A9',
      pressed: '#696969',
    },
  },
} as const

export type Theme = typeof theme

export default theme
