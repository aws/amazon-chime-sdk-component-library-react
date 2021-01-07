// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Select', () => {
  it('select closed', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-select--basic-select'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('select open', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-select--basic-select'
    );

    await page.click('select');
    // wait for select transition to complete
    await page.waitFor(100);

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
