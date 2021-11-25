const config = {
  baseUrl: 'http://localhost:9000',
  host: process.env.HOST || 'chrome',
  firefoxOptions: {
    browserName: 'firefox',
    resolution: '1920x1080',
    'moz:firefoxOptions': {
      args: [
        '-start-debugger-server',
        '9222'
      ],
      prefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
        'media.peerconnection.video.h264_enabled': true,
        'media.webrtc.hw.h264.enabled': true,
        'media.webrtc.platformencoder': true,
        'devtools.chrome.enabled': true,
        'devtools.debugger.prompt-connection': false,
        'devtools.debugger.remote-enabled': true
      },
    },
  },
  chromeOptions: {
    browserName: 'chrome',
    resolution: '1920x1080',
    'goog:chromeOptions': {
      args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
      ],
    },
  },
  sauceOptions: {
    browserVersion: process.env.BROWSER_VERSION || 'latest',
    platformName: process.env.PLATFORM_NAME || 'Windows 10',
    'sauce:options': {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      tunnelIdentifier: process.env.SAUCE_TUNNEL,
      noSSLBumpDomains: 'all',
      extendedDebugging: true,
    }
  },
};

module.exports = config;
