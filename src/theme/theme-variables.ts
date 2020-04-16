const brighBlue = `#1AB9FF`
const mediumBlue = `#37729D`
const coral = `#FF8874`

const lightGray = `#C8C9CC`
const gray = `#828489`
const mediumGray = `#4A4C50`
const darkGray = `#262727`

const bodyFont = `proxima-nova, sans-serif`
// 400, 600 ou 700
const headersFont = `bely-display, sans-serif`
// 400
const accentFont = `bely-display, sans-serif`

export const themeFonts = { bodyFont, accentFont, headersFont }

// default : 375px - iPhone 8

// iPad - 8 cols
const smScreen = `768px`

// iPad Pro
const mdScreen = `1024px`

// iMac - 12 cols
const lgScreen = `1280px`

// macbook pro
const xlgScreen = `1440px`

export const themeBreakpoints = {
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen,
}

export const themeColors = {
  brighBlue,
  mediumBlue,
  coral,
  lightGray,
  mediumGray,
  gray,
  darkGray,
}
