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
    lightest: "#FCF7F6",
    lighter: "#F5DDD5",
    light: "#FF927C",
    primary: "#C52000",
    dark: "#9E3319",
    darker: "#89301A",
    darkest: "#791800",
  },
  success: {
    lightest: "#EBF1EA",
    lighter: "#CEE0C8",
    light: "#50CD49",
    primary: "#067000",
    dark: "#305D1D",
    darker: "#2C511D",
    darkest: "#184206",
  },
  info: {
    lightest: "#DADFE7",
    lighter: "#C4CCD9",
    light: "#418AFD",
    primary: "#2555A0",
    dark: "#264A82",
    darker: "#243F6B",
    darkest: "#123366",
  },
  warning: {
    lightest: "#FAF8EA",
    lighter: "#F7E79E",
    light: "#F9DC60",
    primary: "#F9CC09",
    dark: "#665A2A",
    darker: "#584E26",
    darkest:"#534201",
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
      grey50: "rgb(125, 129, 139)",
      grey40: "rgb(152,157,165)",
      grey10: "rgb(240,241,242)",
      white: "rgb(255,255,255)",
  }
};

const overlays = {
  grey100: rgbaWithOpacity(colorsRgb.greys.grey100, .7),
};

const shadows = {
  none: "none",
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

const inputs = {
  bgd: colors.greys.white,
  border: `0.03125rem solid ${colors.greys.grey30}`,
  borderRadius: defaultTheme.radii.default,
  fontColor: colors.greys.grey80,
  placeholderColor: colors.greys.grey40,
  shadow: `0 0.0625rem 0.0625rem 0 ${rgbaWithOpacity(colorsRgb.greys.black, 0.1)}`,

  focus: {
    bgd: colors.greys.white,
    border: `solid 0.03125rem ${colors.primary.lighter}`,
    shadow: `0 0 0 0.125rem ${colors.primary.lightest}`,
  },

  error: {
    border: `0.03125rem solid ${colors.error.dark}`,
    fontColor: colors.error.primary,
    shadow: `0 0 0 0.125rem ${colors.error.light}`,
  },

  checked: {
    bgd: colors.primary.main,
    border: `solid 0.03125rem ${colors.primary.main}`,
    fontColor: colors.greys.white,
    shadow: `0 0.03125rem 0.03125rem 0 ${rgbaWithOpacity(colorsRgb.primary.dark, 0.7)}`,
  }
};

const modal = {
  bgd: colors.greys.white,
  text: colors.greys.grey80,
  wrapperBgd: rgbaWithOpacity(colorsRgb.greys.grey50, 0.9),
  titleSize: '1.5625rem', /* TODO use typography properties */
  titleWeight: 'normal',
  shadow: `0 1rem 2rem 0 rgba(0, 0, 0, ${rgbaWithOpacity(colorsRgb.greys.black, 0.15)})`,
  border: colors.greys.grey30,
}

const popOver = {
  menuBgd: `${rgbaWithOpacity(colorsRgb.greys.grey10, 0.85)}`,
  shadow: `0 0.75rem 1.875rem 0 ${rgbaWithOpacity(colorsRgb.greys.black, 0.15)}`,
  itemBgd: 'transparent',
  itemText: colors.greys.grey70,
  active: {
    itemBgd: colors.primary.dark,
    itemText: colors.greys.white,
  },
  separator: `${rgbaWithOpacity(colorsRgb.greys.grey40, 0.7)}`,
};

const notification = {
  shadow: `0 0.75rem 1.875rem 0 ${rgbaWithOpacity(colorsRgb.greys.black, 0.15)}`,
  error: {
    text: colors.error.lightest,
    closeButton: {
      text: colors.error.lighter,
      hover: {
        bgd: colors.error.lighter,
        text: colors.error.dark
      },
      active: {
        bgd: colors.error.lightest,
        text: colors.error.darker
      }
    }
  },
  success: {
    text: colors.success.lightest,
    closeButton: {
      text: colors.success.lighter,
      hover: {
        bgd: colors.success.lighter,
        text: colors.success.dark
      },
      active: {
        bgd: colors.success.lightest,
        text: colors.success.darker
      }
    }
  },
  info: {
    text: colors.info.lightest,
    closeButton: {
      text: colors.info.lighter,
      hover: {
        bgd: colors.info.lighter,
        text: colors.info.dark
      },
      active: {
        bgd: colors.info.lightest,
        text: colors.info.darker
      }
    }
  },
  warning: {
    text: colors.warning.darker,
    closeButton: {
      text: colors.warning.dark,
      hover: {
        bgd: colors.warning.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.warning.darker,
        text: colors.greys.white
      }
    }
  }
};

const links = {
  fontColor: colors.primary.main,
  fontColorHover: colors.primary.dark,
  fontColorActive: colors.primary.darker,
  fontColorVisited: colors.primary.darkest,
};

const lightTheme = {
  buttons,
  colors,
  colorsRgb,
  links,
  overlays,
  shadows,
  inputs,
  modal,
  popOver,
  notification,
  ...defaultTheme,
};

export default lightTheme;
