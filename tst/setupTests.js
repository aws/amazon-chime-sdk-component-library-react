const { toMatchImageSnapshot } = require('jest-image-snapshot');
const { TextDecoder, TextEncoder } = require('util');

// amazon-chime-sdk-js 3.33.0 depends on protobufjs 8, which constructs a TextDecoder when it is
// imported. jsdom does not provide TextDecoder or TextEncoder, so use the Node implementations.
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

expect.extend({ toMatchImageSnapshot });
jest.setTimeout(30000);
