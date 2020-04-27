import defaultTheme, { rgbaWithOpacity } from "./default";

const colors = {
  primary: {
      lightest: "#9DEFFB",
      lighter: "#8AEBFA",
      light: "#62E5F9",
      main: "#4FE2F8",
      dark: "#29DCF8",
      darker: "#22B6CB",
      darkest: "#1FA1B5",
  },
  secondary: {
      light: "#FF8B70",
      main: "#FF9B83",
      dark: "#FFB4A1",
  },
  error: {
      lightest: "#FBC1C0",
      lighter: "#FDA8A6",
      light: "##FD9B99",
      primary: "#FF8B8A",
      dark: "#583A39",
      darker: "#452F2E",
      darkest:"#302020",
  },
  success: {
    lightest: "#F4FBF1",
    lighter: "#D2F1C5",
    light: "#BAF39E",
    primary: "#A3E881",
    dark: "#4F6444",
    darker: "#46573D",
    darkest:"#324129",
  },
  info: {
    lightest: "#F0F5FD",
    lighter: "#D8E6FB",
    light: "#C4DBFF",
    primary: "#BAD4FF",
    dark: "#555B69",
    darker: "#494F59",
    darkest:"#343C48",
  },
  warning: {
    lightest: "#FDFDF7",
    lighter: "#3F4149",
    light: "#FFEB96",
    primary: "#FBDF64",
    dark: "#6D653C",
    darker: "#5E5736",
    darkest:"#47422D",
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
  primary: {
    dark: "rgb(41,220,248)",
  },
  greys: {
      black: "rgb(0,0,0)",
      grey100: "rgb(27,28,32)",
      grey90: "rgb(46,47,52)",
      white: "rgb(255,255,255)",
  }
};

const overlays = {
  grey100: rgbaWithOpacity(colorsRgb.greys.grey100, .7),
};

const shadows = {
  none: "none",
  // TODO pixels to REMs?
  default: `0 1.5px 1px 0 ${rgbaWithOpacity(colorsRgb.greys.grey100, 0.15)}`,
};

const buttons = {
  primary: {
    static: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.4)}`,
      text: colors.greys.grey70,
    },
    hover: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.6)}`,
      text: colors.greys.grey70,
    },
    focus: {
      bgd: colors.primary.dark,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.6)}`,
      text: colors.greys.grey70,
    },
    active: {
      bgd: colors.primary.darker,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.6)}`,
      text: colors.greys.grey70,
    },
    selected: {
      bgd: colors.primary.light,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.4)}`,
      text: colors.greys.grey70,
    },
  },
  secondary: {
    static: {
      bgd: colors.greys.grey50,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.6)}`,
      text: colors.greys.white,
    },
    hover: {
      bgd: colors.greys.grey60,
     border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.7)}`,
      text: colors.greys.white,
    },
    focus: {
      bgd: colors.greys.grey60,
     border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.7)}`,
      text: colors.greys.white,
    },
    active: {
      bgd: colors.greys.grey70,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.8)}`,
      text: colors.greys.white,
    },
    selected: {
      bgd: colors.greys.grey60,
      border: `0.03125rem solid ${rgbaWithOpacity(colorsRgb.greys.black, 0.7)}`,
      text: colors.greys.white,
    },
  },

  icon: {
    static: {
      bgd: "transparent",
      border: "none",
      text: colors.greys.grey20,
    },
    hover: {
      bgd: colors.primary.dark,
      border: "none",
      text: colors.greys.grey20,
    },
    focus: {
      bgd: colors.primary.dark,
      border: "none",
      text: colors.greys.grey20,
    },
    active: {
      bgd: colors.primary.darker,
      border: "none",
      text: colors.greys.grey20,
    },
    selected: {
      bgd: colors.primary.light,
      border: "none",
      text: colors.greys.grey20,
    },
  },
};

const checkbox = {
  default: {
    checkmark: colors.greys.grey50,
    checkboxBgd: colors.greys.grey50,
    labelText: colors.greys.white,
    checkboxBorder: `solid 0.03125rem ${rgbaWithOpacity(colorsRgb.greys.black, 0.6)}`,
    checkboxShadow: `inset 0 0.03125rem 0 0 ${rgbaWithOpacity(colorsRgb.greys.white, 0.1)}`,
  },

  checked: {
    checkmark: colors.greys.grey80,
    checkboxBgd: colors.primary.light,
    checkboxBorder: `solid 0.03125rem ${rgbaWithOpacity(colorsRgb.greys.black, 0.4)}`,
    checkboxShadow: `inset 0 0.03125rem 0 0 ${rgbaWithOpacity(colorsRgb.greys.white, 0.2)}`,
  },

  focus: {
    checkboxShadow: `0 0 0 0.125rem ${colors.primary.lighter}`,
    checkboxBorder: `solid 0.03125rem ${colors.primary.main}`,
  }
};

const radio = {
  default: {
    bodyBgd: colors.greys.grey50,
    wrapperBgd: colors.greys.grey50,
    labelText: colors.greys.white,
    wrapperBorder: "solid 0.03125rem rgba(0, 0, 0, 0.6)",
    wrapperShadow: "inset 0 0.03125rem 0 0 rgba(255, 255, 255, 0.1)",
  },

  checked: {
    bodyBgd: colors.greys.grey80,
    wrapperBgd: colors.primary.light,
    wrapperBorder: "solid 0.03125rem rgba(0, 0, 0, 0.4)",
    wrapperShadow: "inset 0 0.03125rem 0 0 rgba(255, 255, 255, 0.2)",
  },

  focus: {
    wrapperShadow: `0 0 0 0.125rem ${colors.primary.lighter}`,
    wrapperBorder: `solid 0.03125rem ${colors.primary.main}`,
  }
};

const textarea = {
  bgd: colors.greys.grey80,
  border: `0.03125rem solid ${colors.greys.black}`,
  shadow: `0 0 0 0 ${colors.primary.lightest}`,
  text: colors.greys.white,
  focus: {
    bgd: colors.greys.white,
    border: `solid 0.03125rem ${colors.primary.lighter}`,
    shadow: `0 0 0 0.125rem ${colors.primary.lightest}`,
    text: colors.greys.grey70,
  }
};

const modal = {
  bgd: colors.greys.grey100,
  text: colors.greys.grey10,
  wrapperBgd: overlays.grey100,
}

const popOver = {
  menuBgd: `${rgbaWithOpacity(colorsRgb.greys.grey90, 0.85)}`,
  shadow: `0 0.75rem 1.875rem 0 ${rgbaWithOpacity(colorsRgb.greys.black, 0.15)}`,
  itemBgd: 'transparent',
  itemText: colors.greys.white,
  active: {
    itemBgd: colors.primary.dark,
    itemText: colors.greys.grey80,
  },
  separator: colors.greys.grey100,
};

const select = {
  bgd: colors.greys.white,
  border: `0.03125rem solid ${colors.greys.grey30}`,
  shadow: `0 0 0 0 ${colors.primary.lightest}`,
  text: colors.greys.grey70,
  focus: {
    bgd: colors.greys.white,
    border: `solid 0.03125rem ${colors.primary.lighter}`,
    shadow: `0 0 0 0.125rem ${colors.primary.lightest}`,
    text: colors.greys.grey70,
  }
};
const notification = {
  shadow: `0 0.75rem 1.875rem 0 ${rgbaWithOpacity(colorsRgb.greys.black, 0.15)}`,
  error: {
    text: colors.error.darker,
    closeButton: {
      text: colors.error.dark,
      hover: {
        bgd: colors.error.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.error.darker,
        text: colors.greys.white
      }
    }
  },
  success: {
    text: colors.success.darker,
    closeButton: {
      text: colors.success.dark,
      hover: {
        bgd: colors.success.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.success.darker,
        text: colors.greys.white
      }
    }
  },
  info: {
    text: colors.info.darker,
    closeButton: {
      text: colors.info.dark,
      hover: {
        bgd: colors.info.dark,
        text: colors.greys.white
      },
      active: {
        bgd: colors.info.darker,
        text: colors.greys.white
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
}

const darkTheme = {
    buttons,
    colors,
    colorsRgb,
    shadows,
    checkbox,
    radio,
    modal,
    popOver,
    overlays,
    select,
    textarea,
    notification,
    ...defaultTheme,
};

export default darkTheme;
