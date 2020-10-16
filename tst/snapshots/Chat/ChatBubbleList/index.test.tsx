// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('ChatBubble', () => {
    it('ChatBubble', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=ui-components-chat--chat-bubble&viewMode=story');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });