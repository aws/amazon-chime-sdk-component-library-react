export const rgbaWithOpacity = (rgbColor: string, opacity: number) => {
    return rgbColor && opacity && rgbColor.replace(')', `,${opacity})`);
};

const fonts = {
    body: "'Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    monospace: 'Menlo, monospace',
};

const radii = {
    default: "0.25rem",
    circle: "50%"
};

const type = {
    label: "0.85rem",
    text: "0.85rem",
    lineHeights: {},
    fontWeights: {},
};

const defaultTheme = {
    rgbaWithOpacity,
    fonts,
    radii,
    type,
};

export default defaultTheme;