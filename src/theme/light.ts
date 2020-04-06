import defaultTheme, { rgbaWithOpacity } from './default';

const colors = {
  primary: {
    lightest: "#88b2ff",
    lighter: "#5d96ff",
    light: "#327aff",
    main: "#075fff",
    dark: "#004ddb",
    darker: "#0042bb",
    darkest: "#002f85",
  },
  secondary: {
    light: "#ff8e74",
    main: "#ff7654",
    dark: "#e86c4d",
  },
  error: {
    light: "#ea4a4c",
    main: "#d33436",
    dark: "#bc1d1f",
  },
  success: {
    light: "#98e571",
    main: "#81e052",
    dark: "#6ab845",
  },
  info: {
    light: "#7abef8",
    main: "#54acf6",
    dark: "#309af4",
  },
  warning: {
    light: "#fad635",
    main: "#f9cc09",
    dark: "#e3bb08",
  },
  button: {
    primary: { 
      static: "#075fff",
      hover: "#004ddb",
      focus: "#004ddb",
      active: "#075fff",
    },
    secondary: {
      static: "#ffffff",
      hover: "#e4e9f2",
      focus: "#e4e9f2",
      active: "#f0f1f2",
    },
  },
  greys: {
    black: "#000000",
    grey100: "#1b1c20",
    grey90: "#2e2f34",
    grey80: "#3f4149",
    grey70: "#50545e",
    grey60: "#616672",
    grey50: "#7d818b",
    grey40: "#989da5",
    grey30: "#d4d5d8",
    grey20: "#e4e9f2",
    grey10: "#f0f1f2",
    white: "#ffffff",
  }
};

const colorsRgb = {
  greys: {
    grey100: "rgb(27,28,32)",
  }
};

const shadows = {
  none: "none",
  // TODO pixels to REMs?
  default: `0 1.5px 1px 0 ${rgbaWithOpacity(colorsRgb.greys.grey100, 0.15)}`,
};

const lightTheme = {
  colors,
  colorsRgb,
  shadows,
  ...defaultTheme,
};
  
export default lightTheme;