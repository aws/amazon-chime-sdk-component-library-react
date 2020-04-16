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
  },
};

const colorsRgb = {
  primary: {
    dark: "rgb(0,77,219)",
  },
  greys: {
      black: "rgb(0,0,0)",
      grey100: "rgb(27,28,32)",  
      white: "rgb(255,255,255)",
  }
};

const overlays = {
  grey100: rgbaWithOpacity(colorsRgb.greys.grey100, .7),
};

const shadows = {
  none: "none",
  // TODO pixels to REMs?
  default: `0 0.09375rem 0.0625rem 0 ${rgbaWithOpacity(colorsRgb.greys.grey100, 0.15)}`,
};

const buttons = {
  primary: {
    static: {
      bgd: colors.primary.light,
      border: `0.03125rem solid ${colors.primary.dark}`,
      text: colors.greys.white,
    },
    hover: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${colors.primary.darker}`,
      text: colors.greys.white,
    },
    focus: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${colors.primary.darker}`,
      text: colors.greys.white,
    },
    active: {
      bgd: colors.primary.darker,
      border: `0.03125rem solid ${colors.primary.darker}`,
      text: colors.greys.white,
    },
    selected: {
      bgd: colors.primary.light,
      border: `0.03125rem solid ${colors.primary.darker}`,
      text: colors.greys.white,
    },
  },
  secondary: {
    static: {
      bgd: colors.greys.white,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey70,
    },
    hover: {
      bgd: colors.greys.grey10,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey70,
    },
    focus: {
      bgd: colors.greys.grey10,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey70,
    },
    active: {
      bgd: colors.greys.grey20,
      border: `0.03125rem solid ${colors.greys.grey40}`,
      text: colors.greys.grey70,
    },
    selected: {
      bgd: colors.greys.grey10,
      border: `0.03125rem solid ${colors.greys.grey30}`,
      text: colors.greys.grey70,
    },
  },

  icon: {
    static: {
      bgd: "transparent",
      border: "none",
      text: colors.greys.grey80,
    },
    hover: {
      bgd: colors.primary.dark,
      border: "none",
      text: colors.greys.white,
    },
    focus: {
      bgd: colors.primary.dark,
      border: "none",
      text: colors.greys.white,
    },
    active: {
      bgd: colors.primary.darker,
      border: "none",
      text: colors.greys.white,
    },
    selected: {
      bgd: colors.primary.light,
      border: "none",
      text: colors.greys.white,
    },
  },
};

const checkbox = {
	default: {
		checkmark: colors.greys.white,
		checkboxBgd: colors.greys.white,
		labelText: colors.greys.grey80,
		checkboxBorder: `solid 0.03125rem ${colors.greys.grey30}`,
		checkboxShadow: `0 0.03125rem 0.0625rem 0 ${rgbaWithOpacity(colorsRgb.greys.grey100, 0.15)}`,
	},

	checked: {
		checkmark: colors.greys.white,
		checkboxBgd: colors.primary.main,
		checkboxBorder: `solid 0.03125rem ${colors.primary.main}`,
		checkboxShadow:	`0 0.03125rem 0.03125rem 0 ${rgbaWithOpacity(colorsRgb.primary.dark, 0.7)}`,
	}
};

const radioInput = {
	default: {
		bodyBgd: colors.greys.white,
		wrapperBgd: colors.greys.white,
		labelText: colors.greys.grey80,
		wrapperBorder: `solid 0.03125rem ${colors.greys.grey30}`,
		wrapperShadow: "0 0.03125rem 0.0625rem 0 rgba(27, 28, 32, 0.15)",
	},

	checked: {
		bodyBgd: colors.greys.white,
		wrapperBgd: colors.primary.main,
		wrapperBorder: `solid 0.03125rem ${colors.primary.main}`,
		wrapperShadow:	"0 0.03125rem 0.03125rem 0 rgba(0, 77, 219, 0.7)",
	}
};

const modal = {
  bgd: colors.greys.grey10,
  text: colors.greys.grey100,
  wrapperBgd: overlays.grey100,
  titleSize: '2.15rem', /* TODO use typography properties */
  titleWeight: 'normal',
  sizes: {
    medium: '',
    large: '',
    fullscreen: '',
  }
}

const lightTheme = {
  buttons,
  colors,
  colorsRgb,
  overlays,
  shadows,
  checkbox,
  radioInput,
  modal,
  ...defaultTheme,
};

export default lightTheme;
