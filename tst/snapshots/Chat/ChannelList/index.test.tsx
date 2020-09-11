// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('ChannelList', () => {
    it('basic view', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-channellist--channel-list&viewMode=story');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
});  