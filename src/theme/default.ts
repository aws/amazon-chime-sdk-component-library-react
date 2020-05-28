export const rgbaWithOpacity = (rgbColor: string, opacity: number) => {
  return rgbColor && opacity && rgbColor.replace(')', `,${opacity})`);
};

export const fonts = {
  body: "'Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  monospace: 'Menlo, monospace',
};

export const radii = {
  default: "0.25rem",
  circle: "50%",
};

export const type = {
  label: "0.85rem",
  text: "0.85rem",
  lineHeights: {},
  fontWeights: {},
};

export const defaultTheme = {
  rgbaWithOpacity,
  fonts,
  radii,
  type,
};

export default defaultTheme;
