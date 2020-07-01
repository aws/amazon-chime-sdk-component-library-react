describe('Primary Button', () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    it(`basic view in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await browser.close();
    });

    it(`hover state in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      await page.hover('text=Primary');

      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await browser.close();
    });

    it(`focus state in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      await page.press('text=Primary', 'Tab');        
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await browser.close();
      });

    it(`active state in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      await page.click('text=Primary');

      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await browser.close();
    });
  };
});