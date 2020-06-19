export const fonts = {
  body: "'Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  monospace: "Menlo, monospace",
};

export const radii = {
  default: "0.25rem",
  circle: "50%",
};

export const zIndex = {
  navigation: 10,
  modal: 20,
  popOver: 30,
};

export const breakpoints = {
  mobilePortrait: "20rem",      // 320px
  mobileLandscape: "35.5rem",   // 568px
  tabletPortait: "48rem",       // 768px
  tabletLandscape: "64rem",     // 1024px
  laptop: "75rem",              // 1200px
};

const fontSizes = {
  baseFontSize: "16px",
  fontWeight: "normal",

  "h1": {
    fontSize: "5.3rem",
    fontWeight: "normal",
    lineHeight: "5.625rem",
    mobile: {
      fontSize: "3.8125rem",
      fontWeight: "normal",
      lineHeight: "5.625rem",
    }
  },

  "h2": {
    fontSize: "3.925rem",
    fontWeight: "normal",
    lineHeight: "3.75rem",
    mobile: {
      fontSize: "3.05rem",
      fontWeight: "normal",
      lineHeight: "4.5rem",
    }
  },

  "h3": {
    fontSize: "2.44125rem",
    fontWeight: "normal",
    lineHeight: "3.75rem",
    mobile: {
      fontSize: "2.90625rem",
      fontWeight: "normal",
      lineHeight: "3rem",
    }
  },

  "h4": {
    fontSize: "1.953125rem",
    fontWeight: "normal",
    lineHeight: "3.75rem",
    mobile: {
      fontSize: "2.15rem",
      fontWeight: "normal",
      lineHeight: "3rem",
    }
  },

  "h5": {
    fontSize: "1.5625rem",
    fontWeight: "normal",
    lineHeight: "3rem",
    mobile: {
      fontSize: "1.59375rem",
      fontWeight: "normal",
      lineHeight: "1.875rem",
    }
  },

  "h6": {
    fontSize: "1.25rem",
    fontWeight: "normal",
    lineHeight: "1.875rem",
    mobile: {
      fontSize: "1.18125rem",
      fontWeight: "normal",
      lineHeight: "1.5rem",
    }
  },

  "text": {
    fontSize: "0.875rem",
    lineHeight: "1.43",
  },

  "label": {
    fontSize: "0.875rem",
    lineHeight: "1.43",
  },

  "small": {
    fontSize: "0.75rem",
    lineHeight: "1.43",
  },
  "footnote": {
    fontSize: "0.65rem",
    lineHeight: "1rem",
  }
}

export const defaultTheme = {
  breakpoints,
  fonts,
  fontSizes,
  radii,
  zIndex,
};

export default defaultTheme;
