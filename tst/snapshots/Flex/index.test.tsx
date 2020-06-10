describe('Flex Snapshots', () => {
    it('fill space centered', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=flex--fill-space-centered');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('equal columns', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=flex--equal-columns');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });

    it('stack', async () => {
        await page.goto('http://localhost:9009/iframe.html?id=flex--stack');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
});