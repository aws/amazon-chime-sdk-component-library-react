// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Badge', () => {
    it('default status', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-badge--basic-badge');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('alart status', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-badge--basic-badge&knob-status=alert');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('success status', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-badge--basic-badge&knob-status=success');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('warning status', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-badge--basic-badge&knob-status=warning');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
});