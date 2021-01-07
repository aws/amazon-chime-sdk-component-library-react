// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('VideoGrid', () => {
  for (let i = 1; i <= 16; i++) {
    it(`standard size ${i}`, async () => {
      await page.goto(
        `http://host.docker.internal:9009/iframe.html?id=ui-components-video-videogrid--video-grid&knob-size=${i}`
      );
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });

    it(`featured size ${i}`, async () => {
      await page.goto(
        `http://host.docker.internal:9009/iframe.html?id=ui-components-video-videogrid--video-grid&knob-layout=featured&knob-size=${i}`
      );
      const featuredImage = await page.screenshot();
      expect(featuredImage).toMatchImageSnapshot();
    });
  }
});
