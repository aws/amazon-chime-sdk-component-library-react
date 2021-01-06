// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Nav Bar', () => {
  it('visually looks correct', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?path=/story/ui-components-navbar--navbar'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('selected NavBarItems', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?path=/story/ui-components-navbar--navbar&knob-isSelected=true'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
