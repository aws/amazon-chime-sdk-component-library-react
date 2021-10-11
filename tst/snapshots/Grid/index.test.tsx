// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Grid Snapshots', () => {
  for (let i = 1; i <= 10; i++) {
    it(`Basic Grid count ${i}`, async () => {
      await page.goto(
        `http://host.docker.internal:9009/iframe.html?id=ui-components-grid--basic-grid&knob-Grid%20items%20count=${i}`
      );
      const grid = await page.screenshot();
      expect(grid).toMatchImageSnapshot();
    });
  }

  // GridGap test
  for (let i = 2; i <= 4; i++) {
    const gap = i * 10;
    it(`Basic GridGap test with GtidGap=.${gap}rem`, async () => {
      await page.goto(
        `http://host.docker.internal:9009/iframe.html?id=ui-components-grid--basic-grid&knob-gridGap=.${gap}rem`
      );
      const gapGrid = await page.screenshot();
      expect(gapGrid).toMatchImageSnapshot();
    });
  }

  it('Named Grid', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-grid--named-grid'
    );
    const namedGrid = await page.screenshot();
    expect(namedGrid).toMatchImageSnapshot();
  });
});
