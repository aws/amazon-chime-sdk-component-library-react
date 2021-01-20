// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Modal', () => {
  it('visually looks correct at size medium', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-modal--basic-example&knob-size=md'
    );

    await page.click('button');
    // waiting for the underlying Portal component to render into the DOM
    await page.waitFor(500);

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('visually looks correct at size large', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-modal--basic-example&knob-size=lg'
    );

    await page.click('button');
    await page.waitFor(500);

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('visually looks correct at size full screen', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-modal--basic-example&knob-size=fullscreen'
    );

    await page.click('button');
    await page.waitFor(500);

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
