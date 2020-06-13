describe('Badge', () => {
    it('default status', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=badge--basic-badge');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  
    it('alart status', async () => {
      await page.goto('http://localhost:9009/iframe.html?id=badge--basic-badge&knob-status=alert');
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
});