// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

describe('VideoTile', () => {
  it('with nameplate', async () => {
    await page.goto(
      'http://host.docker.internal:9009/iframe.html?id=ui-components-video-videotile--video-tile'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
