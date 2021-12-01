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

  async isDisplayed(locator, timeout) {
    if (timeout) {
      await this.driver.wait(until.elementLocated(locator), timeout);
      await this.driver.wait(until.elementIsVisible(this.find(locator)), timeout);
      return true;
    } else {
      try {
        return await this.find(locator).isDisplayed();
      } catch (error) {
        return false;
      }
    }
  }

  async isStale(locator, timeout) {
    return await this.driver.wait(until.stalenessOf(locator), timeout);
  }

  async waitUntil(condition, timeout) {
    return await this.driver.wait(condition, timeout);
  }
}

module.exports = BasePage;
