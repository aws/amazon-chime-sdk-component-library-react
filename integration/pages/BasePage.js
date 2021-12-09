const config = require('../utils/config.js');
const { until } = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async visit(route) {
    await this.driver.get(config.baseUrl + route);
  }

  find(locator) {
    return this.driver.findElement(locator);
  }

  async findAll(locator) {
    return await this.driver.findElements(locator);
  }

  async waitUntil(condition, timeout = 5000) {
    return await this.driver.wait(condition, timeout);
  }
}

module.exports = BasePage;
