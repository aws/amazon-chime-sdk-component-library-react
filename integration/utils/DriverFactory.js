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
          ...config.sauceOptions
        });
        break;
      case 'sauce-chrome':
        builder.usingServer(sauceLabsURL);
        builder.withCapabilities({
          ...config.chromeOptions,
          ...config.sauceOptions
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
    }
    return builder;
  }

  async build(testName, host = this.config.host) {
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
        'See a video of the run at https://saucelabs.com/tests/' +
        this.sessionId
      );
    }
    await this.driver.quit();
  }
}

module.exports = DriverFactory;
