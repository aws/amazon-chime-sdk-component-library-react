// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Message', () => {
    it('incoming', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-chat--message&knob-variant=incoming&knob-showCaret=true&viewMode=story');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('outgoing', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-chat--message&knob-variant=outgoing&knob-showCaret=true&viewMode=story');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });

    it('incoming without caret', async () => {
        await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-chat--message&knob-variant=incoming&knob-showCaret=false&viewMode=story');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    
      it('outgoing without caret', async () => {
        await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-chat--message&knob-variant=outgoing&knob-showCaret=false&viewMode=story');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
  });