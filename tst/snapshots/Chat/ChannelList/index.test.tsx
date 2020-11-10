// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('ChannelList', () => {
  it('visually looks correct', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-chat--channel-list&knob-unread=true&viewMode=story'
    );

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
