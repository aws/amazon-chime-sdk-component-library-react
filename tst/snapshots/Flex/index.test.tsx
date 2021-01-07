// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Flex Snapshots', () => {
  it('fill space centered', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-flex--fill-space-centered'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('equal columns', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-flex--equal-columns'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('stack', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-flex--stack'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
