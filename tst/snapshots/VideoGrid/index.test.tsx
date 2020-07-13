// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('VideoGrid', () => {
  for(let i = 1; i <= 16; i++) {
    it(`size ${i}`, async () => {
      await page.goto(`http://host.docker.internal:9009/iframe.html?id=ui-components-video-videogrid--video-grid&knob-Size=${i}`);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  }
});