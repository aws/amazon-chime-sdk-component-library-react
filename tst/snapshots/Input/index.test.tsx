// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('Input', () => {
  it('basic input sizing = md', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-textinputs--basic-input&knob-value=&knob-size=md'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('basic input sizing = sm, value = test-value', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-textinputs--basic-input&knob-value=test-value&knob-size=sm'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('input with icon sizing = md', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-textinputs--input-with-icon&knob-value=&knob-size=md'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('input with icon sizing = sm, value = test-value', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-textinputs--input-with-icon&knob-value=test-value&knob-size=sm'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('search input sizing = md', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-textinputs--search-input&knob-value=&knob-size=md'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('search input sizing = sm, value = test-value', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-form-textinputs--search-input&knob-value=test-value&knob-size=sm'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
