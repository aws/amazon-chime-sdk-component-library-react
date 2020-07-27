// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('MicVoumeIndicator', () => {
  it('Poor signal', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-microphone-volume--mic-as-button&knob-iconSize=lg&knob-signalStrength=0.5'
    );
    const upButton = await page.$('#up');
    for (let i = 0; i < 5; i++) {
      await upButton.click();
    }
    await page.waitFor(500);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('Muted', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-microphone-volume--mic-as-button&knob-iconSize=lg'
    );
    const button = await page.$('[data-testid="button"]');
    await button.click();
    await page.waitFor(500);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
