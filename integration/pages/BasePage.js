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

  async click(locator) {
    await this.find(locator).click();
  }

  async type(locator, inputText) {
    await this.find(locator).sendKeys(inputText);
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

  async isDisappeared(locator, timeout) {
    return await this.driver.wait(until.stalenessOf(locator), timeout);
  }

  async waitUntil(condition, timeout) {
    return await this.driver.wait(condition, timeout);
  }
}

module.exports = BasePage;
