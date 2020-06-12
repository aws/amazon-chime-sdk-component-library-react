const getConfig = require("jest-puppeteer-docker/lib/config");

const baseConfig = getConfig();
const customConfig = Object.assign({}, baseConfig);

customConfig.connect.defaultViewport = {
    width: 800,
    height: 600
};

module.exports = customConfig;