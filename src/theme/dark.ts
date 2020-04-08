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
        light: "#E73738",
        main: "#EA4847",
        dark: "#F3605F",
    },
    success: {
        light: "#8CE261",
        main: "#A3E881",
        dark: "#AEEB90",
    },
    info: {
        light: "#65B3F7",
        main: "#82C3F8",
        dark: "#92CAF9",
    },
    warning: {
        light: "#FAD946",
        main: "#FBDF64",
        dark: "#FBE378",
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

const buttons = {
    primary: {
      static: {
        bgd: "#29DCF8",
        border: "0.03125rem solid rgba(255, 255, 255, 0.2)",
        text: "#50545e",
      },
      hover: {
        bgd: "#29DCF8",
        border: "0.03125rem solid rgba(255, 255, 255, 0.3)",
        text: "#50545e",
      },
      focus: {
        bgd: "#29DCF8",
        border: "0.03125rem solid rgba(255, 255, 255, 0.3)",
        text: "#50545e",
      },
      active: {
        bgd: "#22b6cb",
        border: "0.03125rem solid rgba(0, 0, 0, 0.6)",
        text: "#50545e",
      },
      selected: {
        bgd: "#62E5F9",
        border: "0.03125rem solid rgba(255, 255, 255, 0.4)",
        text: "#50545e",
      },
    },
    secondary: {
      static: {
        bgd: "#7d818b",
        border: "0.03125rem solid rgba(27,28, 32, 0.15);",
        text: "#ffffff",
      },
      hover: {
        bgd: "#616672",
        border: "0.03125rem solid rgba(0, 0, 0, 0.7);",
        text: "#ffffff",
      },
      focus: {
        bgd: "#616672",
        border: "0.03125rem solid rgba(0, 0, 0, 0.7);",
        text: "#ffffff",
      },
      active: {
        bgd: "#50545e",
        border: "0.03125rem solid rgba(0, 0, 0, 0.8)",
        text: "#ffffff",
      },
      selected: {
        bgd: "#616672",
        border: "0.03125rem solid rgba(0, 0, 0, 0.7);",
        text: "#ffffff",
      },
    },

    icon: {
      static: {
        bgd: "transparent",
        border: "none",
        text: "#e4e9f2",
      },
      hover: {
        bgd: "#29DCF8",
        border: "none",
        text: "#2e2f34",
      },
      focus: {
        bgd: "#29DCF8",
        border: "none",
        text: "#2e2f34",
      },
      active: {
        bgd: "#22B6CB",
        border: "none",
        text: "#2e2f34",
      },
      selected: {
        bgd: "#62E5F9",
        border: "none",
        text: "#2e2f34",
      },
    },
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

const darkTheme = {
    buttons,
    colors,
    colorsRgb,
    shadows,
    ...defaultTheme,
};

export default darkTheme;
