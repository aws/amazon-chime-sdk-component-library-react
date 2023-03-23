const config = {
  baseUrl: 'http://localhost:9000',
  host: process.env.HOST || 'chrome',
  firefoxOptions: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: [
        '-start-debugger-server',
        '9222',
      ],
      prefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
        'media.peerconnection.video.h264_enabled': true,
        'media.webrtc.hw.h264.enabled': true,
        'media.webrtc.platformencoder': true,
        'devtools.chrome.enabled': true,
        'devtools.debugger.prompt-connection': false,
        'devtools.debugger.remote-enabled': true,
      },
    },
  },
  chromeOptions: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        // order of below two args is important for tests to pass.
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
        // copying over from JS SDK  per SauceLabs suggestion.
        'disable-infobars',
        'ignore-gpu-blacklist',
        'test-type',
        'disable-gpu'
      ],
    },
  },
  safariOptions: {
    browserName: 'safari',
  },
  sauceOptions: {
    platformName: process.env.PLATFORM_NAME || 'macOS 12',
    browserVersion: process.env.BROWSER_VERSION || 'latest',
    'sauce:options': {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      tunnelIdentifier: process.env.JOB_ID || 'test-tunnel',
      noSSLBumpDomains: 'all',
      extendedDebugging: true,
      screenResolution: '1440x900',
    },
  },
};

module.exports = config;
