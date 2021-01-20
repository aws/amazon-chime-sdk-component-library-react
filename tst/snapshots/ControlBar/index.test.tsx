// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('ControlBar', () => {
  it('top layout', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('bottom layout', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=true&knob-layout=bottom'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('right layout', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=true&knob-layout=right'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('left layout', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=true&knob-layout=left'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('floating-vertical layout', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=true&knob-layout=undocked-vertical'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('floating-horizontal layout', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=true&knob-layout=undocked-horizontal'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('hidden labels', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=false&knob-layout=top'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  const devices = require('puppeteer/DeviceDescriptors');
  const iPhonex = devices['iPhone X'];

  it('portrait mobile horizontal', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=false&knob-layout=bottom'
    );
    await page.emulate(iPhonex);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('landscape mobile vertical', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-controlbar--control-bar&knob-show%20labels=false&knob-layout=left'
    );
    await page.emulate({ ...iPhonex, isLandscape: true });
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
