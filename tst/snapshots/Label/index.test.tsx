// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Label', () => {
  it('label', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-label--basic-label'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
