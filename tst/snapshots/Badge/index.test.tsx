// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Badge', () => {
  it('default status', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-badge--basic-badge&viewMode=story'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('alert status', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-badge--basic-badge&knob-status=alert&viewMode=story'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
