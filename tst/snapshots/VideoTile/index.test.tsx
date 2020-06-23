describe('VideoTile', () => {
    it('with nameplate', async () => {
      await page.goto('http://host.docker.internal:9009/iframe.html?id=video-videotile--video-tile');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });