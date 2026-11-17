const { toMatchImageSnapshot } = require('jest-image-snapshot');
const { TextDecoder, TextEncoder } = require('util');

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

expect.extend({ toMatchImageSnapshot });
jest.setTimeout(30000);
