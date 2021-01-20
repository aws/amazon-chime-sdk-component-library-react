// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Heading', () => {
  it('css=color: palevioletred, level=1', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-headings--basic-heading&knob-css=color: palevioletred;&knob-level=1'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('css=color: black, level=2', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-headings--basic-heading&knob-css=color: black;&knob-level=2'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('css=color: deepskyblue, level=3,tag=p', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-headings--basic-heading&knob-css=color:%20deepskyblue;&knob-level=3&knob-tag=p'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('css=color: green, level=4, tag=a', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-headings--basic-heading&knob-css=color:%20green;&knob-level=4&knob-tag=a'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
