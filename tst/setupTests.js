const { toMatchImageSnapshot } = require('jest-image-snapshot');
global.playwright = require('playwright');

expect.extend({ toMatchImageSnapshot });
jest.setTimeout(30000);