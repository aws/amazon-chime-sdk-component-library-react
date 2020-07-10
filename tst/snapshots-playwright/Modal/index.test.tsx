// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Modal', () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    it(`basic content in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=modal--basic-example');
      await page.click('data-testid=button')
      // waiting for the underlying Portal component to render into the DOM and animation
      await new Promise(res => setTimeout(() => {
        res()
      }, 500))
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await browser.close();
    });

    it(`large content in ${browserType}`, async () => {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage({ viewport: { width: 800, height: 600 }});
      await page.goto('http://localhost:9009/iframe.html?id=modal--large-content');
      //await page.setViewportSize({ width: 800, height: 600 });
      await page.click('data-testid=button')
      // waiting for the underlying Portal component to render into the DOM and animation
      await new Promise(res => setTimeout(() => {
        res()
      }, 500))
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
      await browser.close();
    });
  };
});