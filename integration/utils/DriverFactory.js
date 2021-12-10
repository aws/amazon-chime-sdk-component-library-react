const { Builder } = require('selenium-webdriver');
const config = require('./config');

class DriverFactory {
  configure(host) {
    let builder = new Builder();
    const sauceLabsURL = 'https://ondemand.saucelabs.com/wd/hub';

    switch (host) {
      case 'sauce-firefox':
        builder.usingServer(sauceLabsURL);
        builder.withCapabilities({
          ...config.firefoxOptions,
          ...config.sauceOptions,
          ...config.platformOptions.windows,
        });
        break;

      case 'sauce-chrome':
        builder.usingServer(sauceLabsURL);
        builder.withCapabilities({
          ...config.chromeOptions,
          ...config.sauceOptions,
          ...config.platformOptions.windows,
        });
        break;

      case 'sauce-safari':
        builder.usingServer(sauceLabsURL);
        builder.withCapabilities({
          ...config.sauceOptions,
          ...config.safariOptions,
          ...config.platformOptions.mac,
        });
        break;

      case 'firefox':
        builder.forBrowser('firefox');
        builder.withCapabilities(config.firefoxOptions);
        break;

      case 'chrome':
        builder.forBrowser('chrome');
        builder.withCapabilities(config.chromeOptions);
        break;

      case 'safari':
        builder.forBrowser('safari');
        builder.withCapabilities(config.safariOptions);
        break;

      default:
        console.log(`Invalid host: ${host}, use local ChromeDriver instead.`);
        builder.forBrowser('chrome');
        builder.withCapabilities(config.chromeOptions);
        break;
    }

    return builder;
  }

  async build(testName, host = config.host) {
    this.host = host;
    this.driver = await this.configure(host).build();
    const { id_ } = await this.driver.getSession();
    this.sessionId = id_;
    this.driver.executeScript('sauce:job-name=' + testName);
  }

  async quit(testResult) {
    if (this.host.startsWith('sauce')) {
      this.driver.executeScript('sauce:job-result=' + testResult);
      console.log(
        '\x1b[33m%s\x1b[0m',
        'See a video of the run at https://saucelabs.com/tests/' +
        this.sessionId
      );
    }
    await this.driver.quit();
  }
}

module.exports = DriverFactory;
