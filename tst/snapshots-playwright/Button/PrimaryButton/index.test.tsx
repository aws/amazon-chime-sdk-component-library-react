// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Primary Button', () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    it(`basic view in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      const image = await page.screenshot();
      await browser.close();
      expect(image).toMatchImageSnapshot();
    });

    it(`hover state in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      await page.hover('text=Primary');
      await new Promise(res => setTimeout(() => {
        res()
      }, 200))
      const image = await page.screenshot();
      await browser.close();
      expect(image).toMatchImageSnapshot();
    });

    it(`focus state in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=form-buttons--primary-button');
      await page.press('text=Primary', 'Tab');
      await new Promise(res => setTimeout(() => {
        res()
      }, 200))
      const image = await page.screenshot();
      await browser.close();
      expect(image).toMatchImageSnapshot();
    });
  };
});