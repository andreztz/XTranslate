import { IThemeManagerState } from './theme-manager.types'
import orderBy = require("lodash/orderBy");

export const defaultTheme: IThemeManagerState = {
  bgcMain: "#000",
  bgcSecondary: { r: 98, g: 101, b: 101, a: .95 },
  bgcLinear: true,
  fontSize: 15,
  fontFamily: "Lato",
  textColor: { r: 255, g: 255, b: 255, a: .85 },
  textShadowRadius: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0,
  textShadowColor: "#ffffff",
  borderColor: { r: 135, g: 144, b: 156, a: .5 },
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 5,
  maxWidth: 250,
  maxHeight: 200,
  minWidth: 0,
  minHeight: 0,
  boxShadowBlur: 10,
  boxShadowColor: { r: 102, g: 102, b: 102, a: .5 },
  boxShadowInner: false,
};