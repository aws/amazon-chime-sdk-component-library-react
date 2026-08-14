const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });
jest.setTimeout(30000);

// Mock WebRTC APIs not available in JSDOM
if (typeof globalThis.RTCRtpSender === 'undefined') {
  globalThis.RTCRtpSender = { prototype: {} };
}
if (typeof globalThis.RTCRtpReceiver === 'undefined') {
  globalThis.RTCRtpReceiver = { prototype: {} };
}
