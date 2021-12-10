class Window {
  constructor(driver) {
    this.driver = driver;
  }

  static async getDefaultWindow(driver, name) {
    const window = new Window(driver);
    window.handle = await driver.getWindowHandle();
    window.name = name;
    return window;
  }

  static async createNewWindow(driver, name) {
    const window = new Window(driver);
    await window.driver.switchTo().newWindow('tab');
    window.handle = await driver.getWindowHandle();
    window.name = name;
    return window;
  }

  async run(commands) {
    await this.driver.switchTo().window(this.handle);
    await commands();
  }
}

module.exports = Window;
